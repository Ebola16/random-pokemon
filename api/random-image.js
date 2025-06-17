import { Worker } from 'worker_threads';
import path from 'path';
import fetch from 'node-fetch';
import safeRegex from 'safe-regex';

function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve('./worker.js'), { workerData });
    const timeout = setTimeout(() => {
      worker.terminate();
      reject(new Error('Regex timeout'));
    }, 100); // ms

    worker.on('message', (result) => {
      clearTimeout(timeout);
      resolve(result);
    });

    worker.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

export default async function handler(req, res) {
  try {
    const { regex = '.*' } = req.query;

    if (regex.length > 256) {
      res.status(400).send('256 character regex limit exceeded.');
      return;
    }

    if (!safeRegex(regex)) {
      res.status(400).send('Unsafe regex pattern.');
      return;
    }

    const response = await fetch('https://raw.githubusercontent.com/Ebola16/random-pokemon-data/main/data/images.json');
    if (!response.ok) {
      res.status(500).send('Failed to load images.');
      return;
    }
    const images = await response.json();

    const filtered = await runWorker({ images, regex });

    if (!Array.isArray(filtered) || filtered.length === 0) {
      res.status(404).send('No matching images found.');
      return;
    }

    const randomImage = filtered[Math.floor(Math.random() * filtered.length)];
    const redirectUrl = `https://raw.githubusercontent.com/Ebola16/random-pokemon-data/main/images/${encodeURIComponent(randomImage)}`;

    res.writeHead(302, { Location: redirectUrl });
    res.end();

  } catch (err) {
    console.error(err);
    res.status(500).send(err.message || 'Server error.');
  }
}
