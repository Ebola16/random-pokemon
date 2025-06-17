import { parentPort, workerData } from 'worker_threads';

try {
  const { images, regex } = workerData;
  const re = new RegExp(regex);
  const filtered = images.filter(img => re.test(img));
  parentPort.postMessage(filtered);
} catch (e) {
  parentPort.postMessage([]);
}
