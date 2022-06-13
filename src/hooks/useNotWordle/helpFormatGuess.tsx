import { GuessType } from "../../interfaces";

function helpFormatGuess(guess: string, solution: string) {
  let solutionArray = [...solution];
  let formattedGuess: GuessType = {
    letters: [...guess].map((key) => {
      return { key: key, state: "absent" };
    }),
  };

  // finding correct letters
  formattedGuess.letters.forEach((letter, index) => {
    if (solutionArray[index] === letter.key) {
      letter.state = "correct";
      /* changed to "" so it doesn't match another character
       * exemple, guess = "apart" with solution = "apple"
       * we only want the first 'a' to be correct and the second one absent
       */
      solutionArray[index] = "";
    }
  });
  // finding present letters
  formattedGuess.letters.forEach((letter) => {
    if (letter.state !== "correct" && solutionArray.includes(letter.key)) {
      letter.state = "present";
      /*
       * changed to "" so it doesn't match another character
       * exemple, guess = "apple" with solution = "plane"
       * we only want the first 'p' to be present, the second one should be absent
       */
      solutionArray[solutionArray.indexOf(letter.key)] = "";
    }
  });

  return formattedGuess;
}

export default helpFormatGuess;
