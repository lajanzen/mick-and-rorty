import createCharacterCard from "./components/characterCard";
import { createElement } from "./lib/elements";
import fetchCharacters from "./lib/api";
import "./style.css";
import createSearchElement from "./components/searchBar";

async function app() {
  const app = document.querySelector("#app");

  const header = createElement(
    "header",

    {
      className: "header",
    },
    [
      createElement("h1", {
        textContent: "Mick and Rorty API",
      }),
      createSearchElement(handleSubmit),
    ]
  );

  async function handleSubmit(searchQuery) {
    const searchedCharacters = await fetchCharacters(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );

    const searchedCharacterCards = searchedCharacters.map((character) =>
      createCharacterCard(character)
    );
    main.innerHTML = "";
    main.append(...searchedCharacterCards);

    console.log(searchedCharacterCards);
  }

  const characters = await fetchCharacters(
    "https://rickandmortyapi.com/api/character"
  );

  const caracterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const main = createElement("main", { className: "main" }, [...caracterCards]);

  app.append(header, main);
}

app();
