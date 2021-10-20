import createCharacterCard from "./components/characterCard";
import { createElement } from "./lib/elements";
import "./style.css";

const characters = [
  {
    name: "Body Guard Morty",
    imageSrc: "https://rickandmortyapi.com/api/character/avatar/44.jpeg",
    status: "Dead",
    race: "Human",
    lastKnownLocation: "The Ricklandtis Mixup",
    firstSeenIn: "Citadel of Ricks",
  },
  {
    name: "Mr. Needful",
    imageSrc: "https://rickandmortyapi.com/api/character/avatar/243.jpeg",
    status: "Alive",
    race: "Humanoid",
    lastKnownLocation: "Earth (Replacement Dimension)",
    firstSeenIn: "Something Ricked This Way Comes",
  },
  {
    name: "Pencilvester",
    imageSrc: "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
    status: "Dead",
    race: "Alien",
    lastKnownLocation: "Earth (Replacement Dimension)",
    firstSeenIn: "Total Rickall",
  },
];

const caracterCards = characters.map((character) =>
  createCharacterCard(character)
);

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

  const main = createElement("main", { className: "main" }, caracterCards);

  app.append(header, main);
}

app();
