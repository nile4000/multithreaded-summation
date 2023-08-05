const { Worker, isMainThread } = require("worker_threads");
const { performance } = require("perf_hooks");
const cpus = require("os").cpus().length;

if (isMainThread) {
  const totalRange = 100000000;
  const workersCount = 12; // change used workers

  const jobs = createJobs(workersCount, totalRange);
  runWorkers(jobs, workersCount);
} else {
  performJob();
}

function createJobs(workersCount, totalRange) {
  let jobs = [];
  let min = 0;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < workersCount; i++) {
    min = max;
    if (i === workersCount - 1) {
      max = totalRange;
    } else {
      max = Math.floor((totalRange / workersCount) * (i + 1));
    }
    sum += max - min;
    jobs.push({ start: min, end: max });
  }
  return jobs;
}

function runWorkers(jobs, workersCount) {
  const tick = performance.now();
  let completedWorkers = 0;
  let totalSum = 0;

  jobs.forEach((job, i) => {
    const worker = new Worker("./worker.js");
    worker.postMessage(job);

    worker.on("message", (sum) => {
      console.log(`Worker ${i} completed. Returned sum: ${sum}`);
      totalSum += sum;
      completedWorkers++;

      if (completedWorkers === workersCount) {
        console.log(
          `${workersCount} workers took ${
            performance.now() - tick
          } ms. Total sum: ${totalSum}`
        );
        process.exit();
      }
    });
  });
}

function performJob() {
  const { parentPort } = require("worker_threads");

  parentPort.on("message", (job) => {
    let count = 0;
    for (let i = job.start; i <= job.end; i++) {
      count += i;
    }
    parentPort.postMessage(count);
  });
}

