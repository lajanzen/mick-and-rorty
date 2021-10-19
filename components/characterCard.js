import styles from "./characterCard.module.css";
import { createElement } from "../lib/elements";

export default function createCharacterCard({ name, imageSrc }) {
  const characterCardElement = createElement(
    "article",
    { className: styles.characterCard },
    [
      createElement("img", {
        className: styles.characterCard__image,
        alt: "",
        src: imageSrc,
      }),
      createElement("section", { className: styles.characterCard__info }, [
        createElement("div", {}, [
          createElement(
            "a",
            {
              href: "https://rickandmortyapi.com/api/character/44",
            },
            [
              createElement("h2", { className: styles.characterCard__name }, [
                name,
              ]),
            ]
          ),
          createElement("p", { className: styles.characterCard__status }, [
            "Dead - Human",
          ]),
        ]),
        createElement("div", {}, [
          createElement("p", {}, ["Last known location:"]),
          createElement(
            "a",
            { href: "https://rickandmortyapi.com/api/location/3" },
            ["Citadel of Ricks"]
          ),
        ]),
        createElement("div", {}, [
          createElement("p", {}, ["First seen in:"]),
          createElement(
            "a",
            { href: "https://rickandmortyapi.com/api/episode/28" },
            ["The Ricklandtis Mixup"]
          ),
        ]),
      ]),
    ]
  );

  return characterCardElement;
}
