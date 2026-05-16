import { describe, it, expect, test } from "vitest";
import { isPrime, longestString } from "../src/examples";

// Describing what the test is
describe("examples.longestString", () => {
  // Test case
  test("returns the longest string", () => {
    const longest = longestString("pickachu", "snorlax");

    expect(longest).toBe("pickachu");
  });

  it("returns the first string when both are of equal length", () => {
    expect(longestString("ditto", "piggy")).toBe("ditto");
  });

  it("handles empty strings", () => {
    expect(longestString("", "mario")).toBe("mario");
    expect(longestString("", "")).toBe("");
  });

  it("ignores leading/trailing whitespaces", () => {
    expect(longestString("   ash      ", "rama")).toBe("rama");
  });
});

// test suite for isPrime
describe("examples.isPrime", () => {
  it("returns true/truthy for small prime numbers", () => {
    // toBe - strict equality
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);

    // toBeTruthy - looser truthiness check
    expect(isPrime(5)).toBeTruthy();
  });

  it("returns false/falsy for non-primes", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);

    // toBeFalsy - looser falsiness check
    expect(isPrime(4)).toBeFalsy();
  });

  // toEqual - same value, but deep comparison safe for arrays/objects
  it("matches results in an array using toEqual", () => {
    const numbers = [2, 3, 4, 5];
    const results = numbers.map(isPrime);

    console.log(results);

    // expect(results).toBe([true, true, false, true])
    expect(results).toEqual([true, true, false, true]);
  });

  // toContain - to check presence inside collections
  it("detects primes within a filtered list", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const primes = nums.filter(isPrime);

    console.log(primes);

    expect(primes).toContain(7);
    expect(primes).not.toContain(4);
  });

  // toThrow - for invalid inputs
  it("throws an error when passed a non-number", () => {
    const badCall = () => isPrime("pikachu");

    expect(badCall).toThrow();
    expect(badCall).toThrow("Input must be a number");
  });

  // toBeTypeOf - check the type of the result
  it("has correct type for result", () => {
    expect(isPrime(7)).toBeTypeOf("boolean");
    expect(typeof isPrime(8)).toBe("boolean");
  });
});
