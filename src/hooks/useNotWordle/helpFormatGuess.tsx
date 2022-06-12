import { GuessType } from "../../interfaces";

function helpFormatGuess(guess: string, solution: string) {
  let solutionArray = [...solution];
  let formatedGuess: GuessType = {
    letters: [...guess].map((key) => {
      return { key: key, color: "grey" };
    }),
  };

  // finding green letters
  formatedGuess.letters.forEach((letter, index) => {
    if (solutionArray[index] === letter.key) {
      letter.color = "green";
      /* changed to "" so it doesn't match another character
       * exemple, guess = "apart" with solution = "apple"
       * we only want the first 'a' to be green and the second one grey
       */
      solutionArray[index] = "";
    }
  });
  // finding yellow letters
  formatedGuess.letters.forEach((letter) => {
    if (letter.color != "green" && solutionArray.includes(letter.key)) {
      letter.color = "yellow";
      /*
       * changed to "" so it doesn't match another character
       * exemple, guess = "apple" with solution = "plane"
       * we only want the first 'p' to be yellow, the second one should be grey
       */
      solutionArray[solutionArray.indexOf(letter.key)] = "";
    }
  });

  return formatedGuess;
}

export default helpFormatGuess;
