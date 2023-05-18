/* in simple terms recursion is a function that calls itself.
you can use recursion instead of loops like forEach and for.
*/

// simple counter traditional
let counter = 0;
for (let i = 0; i < 3 ; i++) {
  counter += 1;
}

// simple counter recursive
const incrementCounter = (counter) => {
  if (counter >= 3) {
    return counter;
  }
  else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}
incrementCounter(0);

// freeCodeCamp video notes

/* function revise(essay) {
  read(essay);
  get_feedback_on(essay);
  apply_changes_to(essay);
  revise(essay) unless essay.complete?;
}
 */

// string reversal example
// input: the simple engineer
// output: reenigne elpmis eht

function reverseString(input) {
  // what is the base case?
  // what is the smallest amount of work I can do in each iteration?
}




