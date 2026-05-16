import { describe, it, expect, test } from "vitest";
import { longestString } from "../src/examples";

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
