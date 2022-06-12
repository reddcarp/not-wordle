import { GuessType } from "../../interfaces";
import helpFormatGuess from "./helpFormatGuess";

describe("helpFormatGuess", () => {
  it("should not take into account a green matched letter twice", () => {
    const res = helpFormatGuess("apart", "apple");
    const expected: GuessType = {
      letters: [
        { key: "a", color: "green" },
        { key: "p", color: "green" },
        { key: "a", color: "grey" },
        { key: "r", color: "grey" },
        { key: "t", color: "grey" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("should not take into account a yellow matched letter twice", () => {
    const res = helpFormatGuess("apple", "plane");
    const expected: GuessType = {
      letters: [
        { key: "a", color: "yellow" },
        { key: "p", color: "yellow" },
        { key: "p", color: "grey" },
        { key: "l", color: "yellow" },
        { key: "e", color: "green" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("should prioritize green letters over grey and yellow ones", () => {
    const res = helpFormatGuess("funny", "plane");
    const expected: GuessType = {
      letters: [
        { key: "f", color: "grey" },
        { key: "u", color: "grey" },
        { key: "n", color: "grey" },
        { key: "n", color: "green" },
        { key: "y", color: "grey" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters green", () => {
    const res = helpFormatGuess("apple", "apple");
    const expected: GuessType = {
      letters: [
        { key: "a", color: "green" },
        { key: "p", color: "green" },
        { key: "p", color: "green" },
        { key: "l", color: "green" },
        { key: "e", color: "green" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters grey", () => {
    const res = helpFormatGuess("proud", "theta");
    const expected: GuessType = {
      letters: [
        { key: "p", color: "grey" },
        { key: "r", color: "grey" },
        { key: "o", color: "grey" },
        { key: "u", color: "grey" },
        { key: "d", color: "grey" },
      ],
    };
    expect(res).toEqual(expected);
  });

  it("all letters yellow", () => {
    const res = helpFormatGuess("plane", "nepal");
    const expected: GuessType = {
      letters: [
        { key: "p", color: "yellow" },
        { key: "l", color: "yellow" },
        { key: "a", color: "yellow" },
        { key: "n", color: "yellow" },
        { key: "e", color: "yellow" },
      ],
    };
    expect(res).toEqual(expected);
  });
});

export {};
