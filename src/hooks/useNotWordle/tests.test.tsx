import { GuessType } from "../../interfaces";
import helpFormatGuess from "./helpFormatGuess";

describe("helpFormatGuess", () => {
  it("should not take into account a correct matched letter twice", () => {
    const res = helpFormatGuess("apart", "apple");
    const expected: GuessType = {
      letters: [
        { key: "a", state: "correct" },
        { key: "p", state: "correct" },
        { key: "a", state: "absent" },
        { key: "r", state: "absent" },
        { key: "t", state: "absent" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("should not take into account a present matched letter twice", () => {
    const res = helpFormatGuess("apple", "plane");
    const expected: GuessType = {
      letters: [
        { key: "a", state: "present" },
        { key: "p", state: "present" },
        { key: "p", state: "absent" },
        { key: "l", state: "present" },
        { key: "e", state: "correct" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("should prioritize correct letters over absent and present ones", () => {
    const res = helpFormatGuess("funny", "plane");
    const expected: GuessType = {
      letters: [
        { key: "f", state: "absent" },
        { key: "u", state: "absent" },
        { key: "n", state: "absent" },
        { key: "n", state: "correct" },
        { key: "y", state: "absent" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters correct", () => {
    const res = helpFormatGuess("apple", "apple");
    const expected: GuessType = {
      letters: [
        { key: "a", state: "correct" },
        { key: "p", state: "correct" },
        { key: "p", state: "correct" },
        { key: "l", state: "correct" },
        { key: "e", state: "correct" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters absent", () => {
    const res = helpFormatGuess("proud", "theta");
    const expected: GuessType = {
      letters: [
        { key: "p", state: "absent" },
        { key: "r", state: "absent" },
        { key: "o", state: "absent" },
        { key: "u", state: "absent" },
        { key: "d", state: "absent" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters present", () => {
    const res = helpFormatGuess("plane", "nepal");
    const expected: GuessType = {
      letters: [
        { key: "p", state: "present" },
        { key: "l", state: "present" },
        { key: "a", state: "present" },
        { key: "n", state: "present" },
        { key: "e", state: "present" },
      ],
    };
    expect(res).toEqual(expected);
  });
});

export {};
