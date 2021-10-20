import styles from "./characterCard.module.css";
import { createElement } from "../lib/elements";

export default function createCharacterCard({
  name,
  image,
  url,
  status,
  species,
  location,
  episode,
}) {
  const characterCardElement = createElement(
    "article",
    { className: styles.characterCard },
    [
      createElement("img", {
        className: styles.characterCard__image,
        alt: "",
        src: image,
      }),
      createElement("section", { className: styles.characterCard__info }, [
        createElement("div", {}, [
          createElement(
            "a",
            {
              href: url,
            },
            [
              createElement("h2", { className: styles.characterCard__name }, [
                name,
              ]),
            ]
          ),
          createElement("p", { className: styles.characterCard__status }, [
            `${status} - ${species}`,
          ]),
        ]),
        createElement("div", {}, [
          createElement("h3", {}, ["Last known location:"]),
          createElement("p", {}, [location.name]),
        ]),
        createElement("div", {}, [
          createElement("h3", {}, ["First seen in:"]),
          createElement("p", {}, [episode[0]]),
        ]),
      ]),
    ]
  );

  return characterCardElement;
}
