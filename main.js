import createCharacterCard from "./components/characterCard";
import { createElement } from "./lib/elements";
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

  const response = await fetch("https://rickandmortyapi.com/api/character");
  const body = await response.json();
  const characters = body.results;

  const caracterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const main = createElement("main", { className: "main" }, caracterCards);

  app.append(header, main);
}

app();
