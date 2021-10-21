import { createElement } from "../lib/elements";

export default function createSearchElement(onSubmit) {
  const textInput = createElement("input", {
    placeholder: "Search character",
  });
  const searchBar = createElement(
    "form",
    {
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(textInput.value);
      },
    },
    [textInput, createElement("button", {}, ["Search"])]
  );

  return searchBar;
}
