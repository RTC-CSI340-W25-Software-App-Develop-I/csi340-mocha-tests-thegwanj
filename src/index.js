const helloWorld = () => {
  return "Hello World";
};

//Simple calculator
const addition = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const remainder = (num1, num2) => num1 % num2;

const exponentiation = (num, exponent) => num ** exponent;

export {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
};
