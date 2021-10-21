import createCharacterCard from "./components/characterCard";
import { createElement } from "./lib/elements";
import fetchCharacters from "./lib/api";
import "./style.css";

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
    ]
  );

  const characters = await fetchCharacters();

  const caracterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const main = createElement("main", { className: "main" }, caracterCards);

  app.append(header, main);
}

app();
