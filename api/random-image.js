import fetch from 'node-fetch';
import safeRegex from 'safe-regex';

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

    // Fetch image list
    const response = await fetch('https://raw.githubusercontent.com/Ebola16/random-pokemon-data/main/data/images.json');
    if (!response.ok) {
      res.status(500).send('Failed to load images.');
      return;
    }
    const images = await response.json();

    // Filter images by regex
    let regExp;
    try {
      regExp = new RegExp(regex);
    } catch {
      res.status(400).send('Invalid regex pattern.');
      return;
    }
    const filtered = images.filter(img => regExp.test(img));

    if (filtered.length === 0) {
      res.status(404).send('No matching images found.');
      return;
    }

    // Pick random image
    const randomImage = filtered[Math.floor(Math.random() * filtered.length)];
    const redirectUrl = `https://raw.githubusercontent.com/Ebola16/random-pokemon-data/main/images/${encodeURIComponent(randomImage)}`;

    // 302 Redirect
    res.writeHead(302, { Location: redirectUrl });
    res.end();

  } catch (error) {
    console.error(error);
    res.status(500).send('Server error.');
  }
}
