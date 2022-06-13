interface LetterType {
  key: string;
  state: StateType;
}

type StateType = "present" | "absent" | "correct" | "empty";

interface GuessType {
  letters: LetterType[];
}

export type { GuessType, LetterType, StateType };
