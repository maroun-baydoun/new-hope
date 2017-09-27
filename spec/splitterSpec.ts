import { split } from "../src/new-hope";

describe("split", () => {

  it("Returns an array of lower case words", () => {

    const words = split("Li estas en Tokio");

    expect(words.length).toEqual(4);
    words.forEach((w) => expect(w).toEqual(w.toLowerCase()));

  });

  it("Returns an array of lower case words without full stops", () => {

    const words = split("Li estas en Tokio.");

    expect(words.length).toEqual(4);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain(".");
    });

  });

  it("Returns an array of lower case words without commas", () => {

    const words = split("Li estas en Tokio, sed mi estas en Osaka");

    expect(words.length).toEqual(9);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain(",");
    });

  });

  it("Returns an array of lower case words without question marks", () => {

    const words = split("Ĉu li estas en Tokio?");

    expect(words.length).toEqual(5);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain("?");
    });

  });

  it("Returns an array of lower case words without exclamation marks", () => {

    const words = split("Li estas en Tokio!");

    expect(words.length).toEqual(4);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain("!");
    });

  });

  it("Returns an array of lower case words without colons", () => {

    const words = split("Li estas en: Tokio");

    expect(words.length).toEqual(4);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain(":");
    });

  });

  it("Returns an array of lower case words without semicolons", () => {

    const words = split("Li estas en Tokio;");

    expect(words.length).toEqual(4);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain(";");
    });

  });

  it("Returns an array of lower case words without paratheses", () => {

    const words = split("Li estas en Tokio (Shinjuku)");

    expect(words.length).toEqual(5);
    words.forEach((w) => {
      expect(w).toEqual(w.toLowerCase());
      expect(w).not.toContain("(");
      expect(w).not.toContain(")");
    });

  });

});
