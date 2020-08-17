// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter one resets when invoked again, counter 2 continues where it left off.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 uses a closure at the return function counter, which was made when the function was made and allows it to take from the parent.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable when counting amounts of different objects, counter 2 would be best for counting a single object in large quantities.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
let score = Math.round(Math.random()*2)
return score
    
}
console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
 let score={
  Home:0,
  Away:0,
}
function finalScore(cb,inn){
 
for(let i=0; i<=inn; i++){
score.Home+=cb()

score.Away+=cb()

}
return score
}
console.log(finalScore(inning,8))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
// let score={
//   Home:0,
//   Away:0,
// }




 function getInningScore(inning){
  let score={
    Home:0,
    Away:0,
  }
 score.Home+=inning()
 score.Away+=inning()
return score
}


function scoreboard(cb,cb2,inn){
let score=cb2(cb)
  for(let i=0; i<=inn; i++){
    score.Home+=cb()
    score.Away+=cb()
  
  if(i===1){
  console.log(`1st inning: Away: ${score.Away} - Home: ${score.Home}`)
}
else if(i===2){
  console.log(`2nd inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===3){
  console.log(`3rd inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===4){
  console.log(`4th inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===5){
  console.log(`5th inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===6){
  console.log(`6th inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===7){
  console.log(`7th inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===8){
  console.log(`8th inning: Away: ${score.Away} - Home ${score.Home}`)
}
else if(i===9){
  console.log(`9th inning: Away: ${score.Away} - Home ${score.Home}`)
}

  }
  return console.log(`Final Score: Away: ${score.Away} - Home ${score.Home}`)
}

console.log(scoreboard(inning,getInningScore,9))
