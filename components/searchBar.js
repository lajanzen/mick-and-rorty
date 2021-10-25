import { createElement } from "../lib/elements";

export default function createSearchElement(onSubmit) {
  let timeoutId;
  const textInput = createElement("input", {
    placeholder: "Search character",
    // DEBOUNCE: //
    oninput: () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSubmit(textInput.value);
      }, 300);
    },
  });
  const searchBar = createElement("form", {}, [
    textInput,
    createElement("button", {}, ["Search"]),
  ]);

  return searchBar;
}
