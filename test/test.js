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
} from "../src/index.js";

describe("helloWord Function", () => {
  it("Should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "The return value should be a string");
  });
  it("Should return 'Hello World'", () => {
    const result = helloWorld();
    assert.equal(
      result,
      "Hello World",
      "The return value should be 'Hello World"
    );
  });
});

describe("addition Function", () => {
  it("Should return the sum of two positive numbers", () => {
    const result = addition(5, 10);
    assert.equal(result, 15, "5 + 10 should equal 15");
  });
});

describe("subtraction Function", () => {
  it("Should return the difference of two positive numbers", () => {
    const result = subtraction(10, 5);
    assert.equal(result, 5, "10 - 5 should equal 5");
  });
});

describe("multiplication Function", () => {
  it("Should multiply two numbers", () => {
    const result = multiplication(5, 6);
    assert.equal(result, 30, "5 x 6 should equal 30");
  });
});

describe("division Function", () => {
  it("Should divide two numbers", () => {
    const result = division(100, 5);
    assert.equal(result, 20, "100 / 5 should equal 20");
  });
});

describe("remainder Function", () => {
  it("Should show the remainder of a division", () => {
    const result = remainder(100, 3);
    assert.equal(result, 1, "100 / 3 should leave us with 1 remainder");
  });
});

describe("exponentiation Function", () => {
  it("Should multiply a number by itself a certain amount of times", () => {
    const result = exponentiation(2, 4);
    assert.equal(result, 16, "2 to the power of 4 should equal 16");
  });
});
