import { haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";

const TEAS = [
  "Darjeeling",
  "Earl Grey",
  "Camomile",
  "Ginger",
  "Tetley",
] as const;

type Tea = (typeof TEAS)[number];

export function chooseTea() {
  print("Chapter 7");
}
