function guessGame()
{

    let randomNr = Math.floor(Math.random()*11);
    let guess;

    do {
        guess = prompt ("guess number between 1-10");
        console.log(guess, randomNr);

        if (randomNr > guess){
            console.log("Your guess was too low");
            
        }else if (randomNr < guess){
            console.log ("your guess was too high");
        }
    }while (guess != randomNr);
    console.log("you won");
}

guessGame();