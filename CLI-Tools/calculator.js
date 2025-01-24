const [, , num1, operator, num2] = process.argv;

if (!num1 || !operator || !num2) {
  console.log("Usage: node calculator.js <num1> <operator> <num2>");
  console.log("Example: node calculator.js 10 + 5");
  process.exit(1);
}

// Convert input numbers to floats
const n1 = parseFloat(num1);
const n2 = parseFloat(num2);

if (isNaN(n1) || isNaN(n2)) {
  console.log("Error: Both num1 and num2 should be valid numbers.");
  process.exit(1);
}

const calculate = (n1, operator, n2) => {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n2 !== 0 ? n1 / n2 : "Error: Division by zero!";
    default:
      return "Error: Invalid operator! Use +, -, *, or /.";
  }
};

// Execute calculation
const result = calculate(n1, operator, n2);
console.log(`Result: ${result}`);
