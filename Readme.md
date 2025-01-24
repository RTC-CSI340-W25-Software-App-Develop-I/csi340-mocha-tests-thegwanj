[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/D3SzhM8d)
# Mocha Testing

## Learning Goals

- [ ] **Use npm to install development dependencies for testing**
- [ ] **Understand testing best practices**
- [ ] **Recall the purpose of unit tests**
- [ ] **Implement testing with Mocha and Chai**
- [ ] **Use `describe` statements to describe the purpose of a test suite**
- [ ] **Use `it` statements to describe the expected functionality of a unit of code**
- [ ] **Properly implement testing methods to accurately test functionality**

## Testing

In this lab, you will be creating unit tests using the Mocha and Chai libraries.

## Node Package Manager (npm)

NPM is a package management tool that we will be using going forward. It allows us to incorporate libraries and frameworks created by other developers, making our development process easier and more efficient.

There are packages for almost everything, from building reusable frontend components to running servers and more. In this instance, instead of creating our own testing methods (which would be time-consuming), we can use existing testing tools. This allows us to focus on what makes our code unique.

## Unit Testing

Unit testing focuses on individual units of code, breaking them down into their smallest testable parts. The goal is to ensure that these units behave as expected.

During development, as changes are made, it's easy to accidentally overwrite functions or important variables, leading to bugs. Tests help us ensure that the critical parts of our codebase continue to function correctly.

## If you need a refresher on DOM Manipulation, see the links below:

- [Mocha Documentation](https://mochajs.org/#getting-started)
- [Unit Testing With Mocha For Beginners](https://www.youtube.com/watch?v=sPyb6QlgBaU)

## Cloning the lab instructions

## Lab Deliverables

1. Installing mocha

- Open the terminal and verify that you're in the same directory as this projects package.json
- run `npm install --save-dev mocha chai` in the terminal to install the mocha and chai libraries
- In the package.json change the script key to run mocha

<details> <summary>Click Here to view solution</summary>

```
// The package.json file should look like this.
// You only need to update the "scripts" section.
// Chai and Mocha should have been automatically added to the devDependencies during installation.
// The version numbers may differ from what's listed here, and that's perfectly fine.
{
  "name": "mocha_tests",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "chai": "^5.1.1",
    "mocha": "^10.7.3"
  }
}

```

</details>

2. import libraries and functions

- Navigate to test/test.js and import assert from chai and all of the functions from src/index.js

<details> <summary>Click Here to view solution</summary>

```
// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} fro

```

</details>

3. Writing tests

- Use the describe function, passing "helloWorld Function" as the first argument and an anonymous arrow function as the second.
- Within the body of the anonymous function, use the it function, passing "should return a string" as the first argument and an anonymous function as the second.
- Inside the body of the it function's anonymous function, create a variable called result and set it to helloWorld().
- Use the assert.typeOf method to test the result. Pass result as the first argument, "string" as the second argument, and "The return value should be a string" as the third argument.
- Write another it function under the first one (still inside the describe function).
- Create a new variable called result and set it to helloWorld().
- Call assert.equal, passing result as the first argument, "Hello World" as the second argument, and "The return value should be 'Hello World'" as the third argument.
- In your terminal run npm test to view your test results

<details> <summary>Click Here to view solution</summary>

```
// The it block focuses on the specific function being tested and its expected result
describe("helloWorld Function", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "The return value should be a string");
  });

  it('should return "Hello World"', () => {
    const result = helloWorld();
    assert.equal(
      result,
      "Hello World",
      'The return value should be "Hello World"'
    );
  });
});
//The output in your terminal should look like this.
root@ixWorkLaptop:~/work/340Labs/mocha_tests# npm run test

> mocha_tests@1.0.0 test
> mocha



  helloWorld Function
    ✔ should return a string
    ✔ should return "Hello World"


  2 passing (3ms)

root@ixWorkLaptop:~/work/340Labs/mocha_tests#
```

</details>

4. Testing the simple calculator

- Repeat the describe and it steps for the addition function.
- Inside the it function, create a variable called result and set it to addition(5, 10).
- Use the assert.equal method, passing result as the first argument, 15 as the second argument, and "5 + 10 should equal 15" as the third argument
- In your terminal run npm test to view your test results.
- Repeat the describe and it steps for each function (subtraction, multiplication, division, remainder, exponentiation), updating the inputs in the assert.equal method to match the relevant function and expected outputs.

<details> <summary>Click Here to view solution</summary>

```
describe("Addition Function", () => {
  it("should correctly add two numbers", () => {
    const result = addition(5, 10);
    assert.equal(result, 15, "5 + 10 should equal 15");
  });
});

describe("Subtraction Function", () => {
  it("should correctly subtract two numbers", () => {
    const result = subtraction(10, 5);
    assert.equal(result, 5, "10 - 5 should equal 5");
  });
});

describe("Multiplication Function", () => {
  it("should correctly multiply two numbers", () => {
    const result = multiplication(7, 7);
    assert.equal(result, 49, "7 * 7 should equal 49");
  });
});

describe("Division Function", () => {
  it("should correctly divide two numbers", () => {
    const result = division(50, 10);
    assert.equal(result, 5, "50 / 10 should equal 5");
  });
});

describe("Remainder Function", () => {
  it("should correctly return the remainder of two numbers", () => {
    const result = remainder(5, 4);
    assert.equal(result, 1, "5 % 4 should equal 1");
  });
});

describe("Exponentiation Function", () => {
  it("should correctly return the exponentiation of a number", () => {
    const result = exponentiation(6, 2);
    assert.equal(result, 36, "6^2 should equal 36");
  });
});

//Your terminal output should look like this.
root@ixWorkLaptop:~/work/340Labs/mocha_tests# npm run test

> mocha_tests@1.0.0 test
> mocha



  helloWorld Function
    ✔ should return a string
    ✔ should return "Hello World"

  Addition Function
    ✔ should correctly add two numbers

  Subtraction Function
    ✔ should correctly subtract two numbers

  Multiplication Function
    ✔ should correctly multiply two numbers

  Division Function
    ✔ should correctly divide two numbers

  Remainder Function
    ✔ should correctly return the remainder of two numbers

  Exponentiation Function
    ✔ should correctly return the exponentiation of a number


  8 passing (6ms)

root@ixWorkLaptop:~/work/340Labs/mocha_tests#



```

</details>

## Submission Instructions

Push your code to GitHub.
Submit the link to your GitHub repository URL.
