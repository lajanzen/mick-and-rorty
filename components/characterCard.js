import styles from "./characterCard.module.css";
import { createElement } from "../lib/elements";

export default function createCharacterCard({
  name,
  imageSrc,
  characterLink,
  status,
  race,
  lastKnownLocation,
  firstSeenIn,
}) {
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
              href: characterLink,
            },
            [
              createElement("h2", { className: styles.characterCard__name }, [
                name,
              ]),
            ]
          ),
          createElement("p", { className: styles.characterCard__status }, [
            `${status} - ${race}`,
          ]),
        ]),
        createElement("div", {}, [
          createElement("h3", {}, ["Last known location:"]),
          createElement("p", {}, [lastKnownLocation]),
        ]),
        createElement("div", {}, [
          createElement("h3", {}, ["First seen in:"]),
          createElement("p", {}, [firstSeenIn]),
        ]),
      ]),
    ]
  );

  return characterCardElement;
}
