export type Token = {
  value: string;
  stem?: string;
  partOfSpeech?: PartOfSpeech;
  case?: Case;
  gender?: Gender;
  number?: Number;
  tense?: Tense;
};

export type PartOfSpeech =
  | "article"
  | "verb"
  | "noun"
  | "personalPronoun"
  | "possessivePronoun"
  | "conjunction"
  | "preposition"
  | "adjective"
  | "adverb"
  | "numeral";

export type Case = "nominative" | "accusative";

export type Gender = "masculine" | "feminine";

export type Number = "singular" | "plural";

export type Tense =
  | "present"
  | "future"
  | "past"
  | "conditional"
  | "volitive"
  | "infinitve";
