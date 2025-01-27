/**
 * 
How It Works:
The master process forks multiple worker processes (equal to the number of CPU cores).
Each worker handles incoming HTTP requests.
If a worker crashes, a new worker is automatically created.

Use Case:
✅ Web servers, REST APIs, and GraphQL servers that handle many concurrent users.


 */

const cluster = require("cluster");
const os = require("os");
const http = require("http");

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers equal to the number of CPU cores
  os.cpus().forEach(() => cluster.fork());

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);

  console.log(`Worker process ${process.pid} started`);
}
