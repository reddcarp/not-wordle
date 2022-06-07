interface LetterType {
  key: string;
  color: "grey" | "yellow" | "green";
}

interface HistoryType {
  letters: LetterType[];
  key: string;
}

export type { LetterType };
