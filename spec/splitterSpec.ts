import {split} from "../splitter";

describe("split", () => {

  it("Returns an array of lower case words without punctuation", () => {

    const words = split("Mi volus skribi centojn da frazoj ĉe Tatoeba, sed mi havas aliajn farendaĵojn.");

    expect(words.length).toEqual(13);
    expect(words).not.toContain(",");
    expect(words).not.toContain(".");
    words.forEach((w) => expect(w).toEqual(w.toLowerCase()));

  });

});
