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
  clear(true);
  print("The Mad Hatter's choice of Teas:");
  TEAS.forEach((tea, index) => print(`(${index})  ${tea}`));
}
