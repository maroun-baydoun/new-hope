import {tokenize} from "../tokenizer";

describe("tokenize", () => {

  it("Classifies an article", () => {
    const tokens = tokenize(["la"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("article");
    expect(tokens[0].stem).toEqual("la");
  });

  it("Classifies a nominative pronoun", () => {
    const tokens = tokenize(["mi"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("pronoun");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].stem).toEqual("mi");
  });

  it("Classifies an accusative pronoun", () => {
    const tokens = tokenize(["min"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("pronoun");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].stem).toEqual("mi");
  });

  it("Classifies a singular nominative noun", () => {
    const tokens = tokenize(["pomo"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].stem).toEqual("pomo");
  });

  it("Classifies a plural nominative noun", () => {
    const tokens = tokenize(["pomoj"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].stem).toEqual("pomo");
  });

  it("Classifies a singular accusative noun", () => {
    const tokens = tokenize(["pomon"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].stem).toEqual("pomo");
  });

  it("Classifies a plural accusative noun", () => {
    const tokens = tokenize(["pomojn"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].stem).toEqual("pomo");
  });

  it("Classifies a singular feminine nominative noun", () => {
    const tokens = tokenize(["knabino"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].gender).toEqual("feminine");
    expect(tokens[0].stem).toEqual("knabo");
  });

  it("Classifies a singular feminine accusative noun", () => {
    const tokens = tokenize(["knabinon"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].gender).toEqual("feminine");
    expect(tokens[0].stem).toEqual("knabo");
  });

  it("Classifies a plural feminine nominative noun", () => {
    const tokens = tokenize(["knabinoj"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].gender).toEqual("feminine");
    expect(tokens[0].stem).toEqual("knabo");
  });

  it("Classifies a plural feminine accusative noun", () => {
    const tokens = tokenize(["knabinojn"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("noun");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].gender).toEqual("feminine");
    expect(tokens[0].stem).toEqual("knabo");
  });

  it("Classifies a singular nominative adjective", () => {
    const tokens = tokenize(["bela"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("adjective");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].stem).toEqual("bela");
  });

  it("Classifies a singular accusative adjective", () => {
    const tokens = tokenize(["belan"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("adjective");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("singular");
    expect(tokens[0].stem).toEqual("bela");
  });

  it("Classifies a plural nominative adjective", () => {
    const tokens = tokenize(["belaj"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("adjective");
    expect(tokens[0].case).toEqual("nominative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].stem).toEqual("bela");
  });

  it("Classifies a pluarl accusative adjective", () => {
    const tokens = tokenize(["belajn"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("adjective");
    expect(tokens[0].case).toEqual("accusative");
    expect(tokens[0].number).toEqual("plural");
    expect(tokens[0].stem).toEqual("bela");
  });

  it("Classifies an adverb", () => {
    const tokens = tokenize(["rapide"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("adverb");
    expect(tokens[0].stem).toEqual("rapide");
  });

  it("Classifies an infinitve verb", () => {
    const tokens = tokenize(["skribi"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("infinitve");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a present tense verb", () => {
    const tokens = tokenize(["skribas"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("present");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a future tense verb", () => {
    const tokens = tokenize(["skribos"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("future");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a past tense verb", () => {
    const tokens = tokenize(["skribis"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("past");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a conditional tense verb", () => {
    const tokens = tokenize(["skribus"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("conditional");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a volitive tense verb", () => {
    const tokens = tokenize(["skribu"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("verb");
    expect(tokens[0].tense).toEqual("volitive");
    expect(tokens[0].stem).toEqual("skribi");
  });

  it("Classifies a conjunction", () => {
    const tokens = tokenize(["kaj"]);

    expect(tokens.length).toEqual(1);
    expect(tokens[0].partOfSpeech).toEqual("conjunction");
    expect(tokens[0].stem).toEqual("kaj");
  });

});
