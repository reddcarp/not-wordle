interface LetterType {
  key: string;
  color: "grey" | "yellow" | "green";
}

interface GuessType {
  letters: LetterType[];
}

export type { GuessType };
