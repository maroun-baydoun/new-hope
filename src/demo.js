import { split, tokenize } from "new-hope";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#demo > form");
  const result = document.querySelector("#result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const sentence = form.querySelector("input[name=sentence]").value;

    if (!sentence) {
      return;
    }

    const tokens = tokenize(split(sentence));

    const html = tokens
      .map(
        ({ value, ...details }) =>
          `<div><div>${value}</div> <div>${Object.keys(details)
            .map(
              (field) =>
                `<span>${field
                  .replace(/([A-Z])/g, " $1")
                  .toLowerCase()}:</span> ${details[field]
                  .replace(/([A-Z])/g, " $1")
                  .toLowerCase()}`
            )
            .join(", ")}</div></div>`
      )
      .join("");
    result.innerHTML = html;
  });
});
