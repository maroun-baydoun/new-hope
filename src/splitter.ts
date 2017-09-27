export const split = (text: string) => {
  return text.split(/[" " | . | , | ; | : | ? | ! | ( | )]/)
    .map((w) => w.toLowerCase().trim())
    .filter((w) => w !== "")
};
