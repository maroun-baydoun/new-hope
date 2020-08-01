export declare type Token = {
    value: string;
    stem?: string;
    partOfSpeech?: PartOfSpeech;
    case?: Case;
    gender?: Gender;
    number?: Number;
    tense?: Tense;
};
export declare type PartOfSpeech = "article" | "verb" | "noun" | "personalPronoun" | "possessivePronoun" | "conjunction" | "preposition" | "adjective" | "adverb" | "numeral";
export declare type Case = "nominative" | "accusative";
export declare type Gender = "masculine" | "feminine";
export declare type Number = "singular" | "plural";
export declare type Tense = "present" | "future" | "past" | "conditional" | "volitive" | "infinitve";
