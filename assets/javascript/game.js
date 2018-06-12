var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
        wins++;
        alert('congrats, You Won!');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (guessesLeft == 0) {
        losses++;
        alert('You lost, good luck next time');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    var html =
        "<h1>The psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>your Guesses so far: " + guessesSoFar + "</p>";

    document.querySelector('#game').innerHTML = html;
}