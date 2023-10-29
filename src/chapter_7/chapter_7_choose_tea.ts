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
  clear(true);
  const chosenTea = parseInt(input);
  print(`You chose ${TEAS[chosenTea]} tea`);

  //check all guests like the tea choice
  let teaCheck = checkTeaChoice(guests, chosenTea);
  if (teaCheck.length === 0) {
    print("Mad Hatter is jumping with joy");
    print("All his guests approve your choice!");
    print("He rewards you with a bottle of Wake-up potion");
    print("Congratulations! Time to leave Wonderland.....");
    return askQuestion("press ENTER to re-enter Wonderland", haveAdventures);
  } else {
    print("Mad Hatter is fuming with anger");
    if (teaCheck.length === 1) {
      print(`${teaCheck} does not like your choice of tea!`);
    } else {
      let notLike = teaCheck.reduce((result, name, index) =>
        teaCheck.length !== index + 1
          ? `${result}, ${name}`
          : `${result} and ${name}`
      );
      print(`${notLike} do not like your choice of tea!`);
      print("Try choosing a tea with a hint of state");
    }

    return askQuestion("Press enter to choose again", chooseTea);
  }
}

//returns an array of guest names that don't like the chosen tea
function checkTeaChoice(guests: Guests[], chosenTea: number) {
  let badChoiceCount: string[] = [];
  guests.forEach((guest) => {
    if (!guest.tea.includes(TEAS[chosenTea]))
      badChoiceCount = [...badChoiceCount, guest.name];
  });
  return badChoiceCount;
}
