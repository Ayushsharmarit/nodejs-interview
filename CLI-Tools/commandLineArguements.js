const args = process.argv.slice(2);

// Parse arguments
let name = "";
let age = 0;
console.log(args);

args.forEach((arg, index) => {
  if (arg === "--name") {
    name = args[index + 1];
  }
  if (arg === "--age") {
    age = args[index + 1];
  }
});

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

/*
1. What is process.argv in Node.js?
It's an array containing the command-line arguments passed when the script was invoked.

2. How can you parse command-line arguments in Node.js?
Using process.argv.slice(2) for manual parsing or libraries like yargs, commander, or minimist.

3. What is the role of the bin field in package.json?
It defines the executable file for a Node.js package when installed globally or locally.

*/