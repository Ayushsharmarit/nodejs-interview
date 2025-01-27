/**
 * The Worker Threads module is used for running CPU-intensive tasks in parallel without blocking the main event loop.
How It Works:
The main thread creates a worker thread to handle a CPU-heavy calculation.
The worker performs the task in parallel and sends back the result.

Use Case:
✅ Image processing, video encoding, machine learning, cryptography, and parsing large files.


 */
const { Worker } = require("worker_threads");

console.log(`Main thread: ${process.pid}`);

const worker = new Worker("./workerTask.js"); // Run the worker file

worker.on("message", (result) => {
  console.log(`Worker result: ${result}`);
});

worker.on("error", (err) => console.error("Worker error:", err));
