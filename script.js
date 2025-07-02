//guessing game
const max=prompt("guess the random generated number");
const random =Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you guessed it right");
        console.log("congrats");
    }else if(guess < random){
        //hint
        prompt("your guess was to small")
    }else if(guess >random){
        //hint
        prompt("your guess was to large");
    }
    else{
        guess=prompt("your guess was wrong ! please try again");
  }
}