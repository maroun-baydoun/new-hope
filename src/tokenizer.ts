import { Token } from "./token";

export const tokenize = (words: string[]): Token[] =>
  words.map((word) => recurrToknize(word));

const recurrToknize = (word: string): Token => {
  const rt = (word: string, token?: Token): Token => {
    const t = token ? { ...token, stem: word } : { value: word, stem: word };

    if (isNumeral(word)) {
      return { ...t, partOfSpeech: "numeral" };
    } else if (isArticle(word)) {
      return { ...t, partOfSpeech: "article" };
    } else if (isPersonalPronoun(word)) {
      return {
        ...t,
        partOfSpeech: "personalPronoun",
        case: t.case || "nominative",
      };
    } else if (isPossessivePronoun(word)) {
      return {
        ...t,
        partOfSpeech: "possessivePronoun",
        case: t.case || "nominative",
        number: t.number || "singular",
      };
    } else if (isConjunction(word)) {
      return { ...t, partOfSpeech: "conjunction" };
    } else if (isPreposition(word)) {
      return { ...t, partOfSpeech: "preposition" };
    } else if (isAccusative(word)) {
      return rt(stripSuffix(word), { ...t, case: "accusative" });
    } else if (isPlural(word)) {
      return rt(stripSuffix(word), { ...t, number: "plural" });
    } else if (isFeminine(word)) {
      return rt(stripSuffix(word, 3) + "o", { ...t, gender: "feminine" });
    } else if (isNoun(word)) {
      return {
        ...t,
        number: t.number || "singular",
        case: t.case || "nominative",
        gender: t.gender || "masculine",
        partOfSpeech: "noun",
      };
    } else if (isAdverb(word)) {
      return { ...t, partOfSpeech: "adverb" };
    } else if (isAdjective(word)) {
      return {
        ...t,
        case: t.case || "nominative",
        number: t.number || "singular",
        partOfSpeech: "adjective",
      };
    } else if (isPresentVerb(word)) {
      return {
        ...t,
        tense: "present",
        partOfSpeech: "verb",
        stem: stripSuffix(word, 2) + "i",
      };
    } else if (isPastVerb(word)) {
      return {
        ...t,
        tense: "past",
        partOfSpeech: "verb",
        stem: stripSuffix(word, 2) + "i",
      };
    } else if (isFutureVerb(word)) {
      return {
        ...t,
        tense: "future",
        partOfSpeech: "verb",
        stem: stripSuffix(word, 2) + "i",
      };
    } else if (isConditionalVerb(word)) {
      return {
        ...t,
        tense: "conditional",
        partOfSpeech: "verb",
        stem: stripSuffix(word, 2) + "i",
      };
    } else if (isVolitiveVerb(word)) {
      return {
        ...t,
        tense: "volitive",
        partOfSpeech: "verb",
        stem: stripSuffix(word) + "i",
      };
    } else if (isInfiniteVerb(word)) {
      return { ...t, tense: "infinitve", partOfSpeech: "verb" };
    }

    return t;
  };

  return rt(word);
};

const endsWith = (word: string, suffix: string) =>
  word.length > suffix.length &&
  word.lastIndexOf(suffix) === word.length - suffix.length;

const isArticle = (word: string) => word === "la";

const isAccusative = (word: string) => endsWith(word, "n");

const isPlural = (word: string) => endsWith(word, "j");

const isNoun = (word: string) => endsWith(word, "o");

const isFeminine = (word: string) => endsWith(word, "ino");

const isAdjective = (word: string) => endsWith(word, "a");

const isAdverb = (word: string) => endsWith(word, "e");

const isPersonalPronoun = (word: string) =>
  ["mi", "vi", "li", "ŝi", "ĝi", "ni", "ili", "oni", "si"].indexOf(word) > -1;

const isPossessivePronoun = (word: string) =>
  ["mia", "via", "lia", "ŝia", "ĝia", "nia", "ilia", "sia"].indexOf(word) > -1;

const isConjunction = (word: string) =>
  [
    "kaj",
    "aŭ",
    "nek",
    "se",
    "ĉu",
    "sed",
    "anstataŭ",
    "krom",
    "kiel",
    "ke",
  ].indexOf(word) > -1;

const isPreposition = (word: string) =>
  [
    "al",
    "antaŭ",
    "apud",
    "ĉe",
    "ĉirkaŭ",
    "da",
    "de",
    "dum",
    "ekde",
    "ekster",
    "el",
    "en",
    "ĝis",
    "inter",
    "je",
    "kontraŭ",
    "krom",
    "kun",
    "malantaŭ",
    "malgraŭ",
    "per",
    "po",
    "por",
    "post",
    "preter",
    "pri",
    "pro",
    "sen",
    "sub",
    "super",
    "sur",
    "tra",
    "trans",
  ].indexOf(word) > -1;

const isNumeral = (word: string) => /^\d+$/.test(word);

const isPresentVerb = (word: string) => endsWith(word, "as");

const isPastVerb = (word: string) => endsWith(word, "is");

const isFutureVerb = (word: string) => endsWith(word, "os");

const isConditionalVerb = (word: string) => endsWith(word, "us");

const isVolitiveVerb = (word: string) => endsWith(word, "u");

const isInfiniteVerb = (word: string) => endsWith(word, "i");

const stripSuffix = (word: string, suffixLength = 1) =>
  word.substring(0, word.length - suffixLength);
