import { Hole, HOLES } from "../chapter_1/chapter_1.types";
import { Tea, TEAS } from "../chapter_7/chapter_7_choose_tea";

// 💡 This `parseHoleInput` function exists to keep user input (which can be anything)
//    away from our logic, which we want to keep clean using our nice neat types like `Hole`
//    This function translates all possible user inputs into either:
//           a Hole    👈 if the input is valid
//			 undefined 👈 if the input is invalid
export function parseHoleInput(input: string): Hole | undefined {
  //  It might seem like we know this is a number,
  //  but of course the user can enter any nonsense to the prompt!
  const chosenHole = parseInt(input);

  // now we verify it's valid
  if (isNaN(chosenHole)) {
    return undefined;
  }

  if (chosenHole < 0 || chosenHole > HOLES.length - 1) {
    return undefined;
  }

  // we know the input is valid so we can return a Hole
  return HOLES[chosenHole];
}

//verify input is valid
export function parseTeaInput(input: string): Tea | undefined {
  const chosenTea = parseInt(input);

  return isNaN(chosenTea) || chosenTea < 0 || chosenTea > TEAS.length - 1
    ? undefined
    : TEAS[chosenTea];
}
