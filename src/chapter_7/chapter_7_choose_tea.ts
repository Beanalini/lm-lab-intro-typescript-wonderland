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

//object stores guest name and tea preferences
interface Guests {
  name: string;
  tea: Tea[];
}

const guests: Guests[] = [
  {
    name: "Cheshire Cat",
    tea: ["Earl Grey", "Ginger"],
  },
  {
    name: "White Rabbit",
    tea: ["Tetley", "Ginger", "Earl Grey"],
  },
  {
    name: "Queen of Hearts",
    tea: ["Darjeeling", "Ginger", "Earl Grey", "Camomile"],
  },
  {
    name: "Caterpillar",
    tea: ["Tetley", "Ginger", "Earl Grey"],
  },
];

export function chooseTea() {
  clear(true);
  print("The Mad Hatter's choice of Teas:");
  TEAS.forEach((tea, index) => print(`(${index})  ${tea}`));
  askQuestion("Which tea will you choose? Enter a number", helpHatter);
}

function helpHatter(input: string) {
  const chosenTea = parseInt(input);
  print(`You chose ${TEAS[chosenTea]} tea`);
}
