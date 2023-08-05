const { parentPort } = require("worker_threads");

parentPort.on("message", (job) => {
  let count = 0;
  for (let i = job.start; i < job.end; i++) {
    count += i;
  }
  parentPort.postMessage(count); // Sende die berechnete Summe zurück
});
