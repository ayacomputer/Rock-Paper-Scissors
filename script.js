var wins = 0;
var ties = 0;
var loses = 0;
var options = ["R", "P", "S"]


if (confirm("Are you ready?")) {

    function playGame() {
        var userInput = prompt("Enter 'R' or 'P'or 'S'");

        if (!userInput) {
            return;
        }

        userInput = userInput.toUpperCase();
        var random = Math.floor(Math.random() * options.length);
        var computerInput = option[random];
        alert("The computer chose " + computerInput);

        if (userInput === computerInput) {
            ties++;
            alert("It's a tie!");
            var tryAgain = confirm("Try again?");
            if (tryAgain) {
                playGame();
            } else {
                alert("Bye bye");
            }

        } else if (
            (userInput === "R" && computerInput === "S") ||
            (userInput === "P" && computerInput === "R") ||
            (userInput === "S" && computerInput === "P")
        ) {
            wins++;
            window.alert("You win!");

            if (tryAgain) {
                playGame();
            }

        } else {
            loses++;
            alert("You lost!");
            if (tryAgain) {
                playGame();
            }

            window.alert(
                "Stats:\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses
            );


        };
    }

} else {
    alert("bye bye");
};
