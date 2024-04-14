#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "numberGuessed",
        type: "number",
        message: "Guess the number between (1-6)"
    }
]);
const randomNumber = Math.floor(Math.random() * 6 + 1);
if (answer.numberGuessed === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("you guessed the wrong number");
}
