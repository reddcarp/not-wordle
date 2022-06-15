interface LetterType {
  key: string;
  state: StateType;
}

type StateType = "present" | "absent" | "correct" | "empty";

interface GuessType {
  letters: LetterType[];
}

interface UsedKeysType {
  [index: string]: StateType;
}

export type { GuessType, LetterType, StateType, UsedKeysType };
