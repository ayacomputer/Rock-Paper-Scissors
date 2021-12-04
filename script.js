var wins = 0;
var ties = 0;
var loses = 0;
var options = ["R", "P", "S"];


function playGame() {
    var userInput = prompt("Enter 'R' or 'P'or 'S'");

    if (!userInput) {
        return;
    }

    userInput = userInput.toUpperCase();
    var random = Math.floor(Math.random() * options.length);
    var computerInput = options[random];
    alert("The computer chose " + computerInput);

    if (userInput === computerInput) {
        ties++;
        alert("It's a tie!");

    } else if (
        (userInput === "R" && computerInput === "S") ||
        (userInput === "P" && computerInput === "R") ||
        (userInput === "S" && computerInput === "P")
    ) {
        wins++;
        alert("You win!");

    } else {
        loses++;
        alert("You lost!");

    };

    alert(
        "Stats:\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + loses);

    if (confirm("Try again?")) {
        playGame();
    } else {
        alert("Bye bye");
    }



}

playGame();
