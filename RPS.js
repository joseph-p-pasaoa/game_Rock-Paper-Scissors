// JOSEPH P. PASAOA
//



const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const prefix = '. . . ROCK, PAPER, or SCISSORS?\n. . . [Type \'r\', \'p\', or \'s\'. Then press \'Enter.\']';

const bestOfHowMany = 5;             // CUSTOMIZE THE LENGTH OF THE GAME HERE
const winsNeeded = Math.floor(bestOfHowMany / 2);

// VALUES INIT
let comp = Math.ceil(Math.random() * 3);
let scoreU = 0;
let scoreC = 0;
let scoreDraws = 0;

//

const umpire = function (saysUser, saysComp) {
  // USER THROWS ROCK
  if (saysUser === 300 && saysComp === 3) {
    console.log("DRAW!!! <----- You threw ROCK, I also threw ROCK.");
    scoreDraws+=1;
    }
    if (saysUser === 300 && saysComp === 2) {
        console.log("YOU won!!! <----- You threw ROCK, I threw SCISSORS.")
        scoreU+=1
    }
    if (saysUser === 300 && saysComp === 1) {
        console.log("I won!!! <----- You threw ROCK, I threw PAPER.")
        scoreC+=1
    }
    // USER THROWS SCISSORS
    if (saysUser === 200 && saysComp === 3) {
        console.log("I won!!! <----- You threw SCISSORS, I threw ROCK.")
        scoreC+=1
    }
    if (saysUser === 200 && saysComp === 2) {
        console.log("DRAW!!! <----- You threw SCISSORS, I also threw SCISSORS.")
        scoreDraws+=1
    }
    if (saysUser === 200 && saysComp === 1) {
        console.log("YOU won!!! <----- You threw SCISSORS, I threw PAPER.")
        scoreU+=1
    }
    // USER THROWS PAPER
    if (saysUser === 100 && saysComp === 3) {
        console.log("YOU won!!! <----- You threw PAPER, I threw ROCK.")
        scoreU+=1
    }
    if (saysUser === 100 && saysComp === 2) {
        console.log/*summer*/("I won!!! <----- You threw PAPER, I threw SCISSORS.")
        scoreC+=1
    }
    if (saysUser === 100 && saysComp === 1) {
        console.log("DRAW!!! <----- You threw PAPER, I also threw PAPER.")
        scoreDraws+=1
    }
    // SCORECARD
    console.log('\n\nYOU: ' + scoreU + ', ME: ' + scoreC + ' (draws: ' + scoreDraws + ')\n------------------------')
}

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'r':
      umpire(300,comp);
      comp = Math.ceil(Math.random() * 3);
      break;
    case 's':
      umpire(200,comp);
      comp = Math.ceil(Math.random() * 3);
      break;
    case 'p':
      umpire(100,comp);
      comp = Math.ceil(Math.random() * 3);
      break;
    default:
      console.log('\n. . . What?? Try again....');
      break;
  }
  if (scoreU > winsNeeded) {
      console.log('That\'s best of 5.\nYOU WIN! *** Thanks for playing!')
      process.exit(0);
  } else if (scoreC > winsNeeded) {
      console.log('And that\'s best of 5.\nI WIN! *** Thanks for playing!')
      process.exit(0);
  } else {
  rl.prompt()
  }
});

console.log('Let\'s play Rock, Paper, Scissors! Best of ' + bestOfHowMany + ' WINS. I wish you good fortune.\n')
rl.setPrompt(prefix, prefix.length);
rl.prompt();
