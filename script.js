let options = ["Rock", "Paper", "Scissors"];

t=1;


while(t>0)    {
    let computer = options[Math.floor(Math.random() * options.length)].toLowerCase();
    let player = prompt("Rock, Paper, Scissors? Type 'Exit' to quit.").toLowerCase();
    if (player == "exit") {
        t=0;
        break;
    }
    init(computer, player);
}

function init(computer_choice, player_choice) 
    {      
            console.log("Computer chose: " + computer_choice);
            console.log("Player chose: " + player_choice);
    
            if (player_choice == "rock") {
                if (computer_choice == "scissors") {
                    console.log("You Win!");
                } else if (computer_choice == "paper") {
                    console.log("You Lose!");
                } else {
                    console.log("You Tied!");
                }
            } else if (player_choice == "paper") {
                if (computer_choice == "rock") {
                    console.log("You Win!");
                } else if (computer_choice == "scissors") {
                    console.log("You Lose!");
                } else {
                    console.log("You Tied!");
                }
            } 
            else if (player_choice == "scissors")
            {
                if (computer_choice == "paper") 
                {
                    console.log("You Win!");
                } 
                else if (computer_choice == "rock") 
                {
                    console.log("You Lose!");
                } 
                else 
                {
                    console.log("You Tied!");
                }
            } 
            else 
            {
                alert("da fuck?")
                console.log("Invalid input. Please enter Rock, Paper, Scissors, or 'Exit' to quit.");
                i--;
            }
        }