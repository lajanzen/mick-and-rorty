import createCharacterCard from "./components/characterCard";
import { createElement } from "./lib/elements";
import "./style.css";

function app() {
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

  const main = createElement("main", { className: "main" }, [
    createCharacterCard({
      imageSrc: "https://rickandmortyapi.com/api/character/avatar/44.jpeg",
      name: "Body Guard Morty",
    }),
    createCharacterCard({
      imageSrc: "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
      name: "Maximums Rickimus",
    }),
    createCharacterCard({
      imageSrc: "https://rickandmortyapi.com/api/character/avatar/273.jpeg",
      name: "Purge Planet Ruler",
    }),
  ]);

  app.append(header, main);
}

app();
