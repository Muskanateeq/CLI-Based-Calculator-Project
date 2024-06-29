#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter First Value" , type: "number" , name: "Firstvalue"},
    {message:"Enter Second Value" , type: "number" , name: "Secondvalue"},
    {
        message: "Please choose one operator for further proceedings",
        type: "list",
        name: "operator",
        choices:["addition","subtraction","Multiplication","Division","Exponential","Modulus"],
    },
]);

// conditional statement

if (answer.operator === "addition") {
    console.log(answer.Firstvalue + answer.Secondvalue);
}else if (answer.operator === "subtraction") {
    console.log(answer.Firstvalue - answer.Secondvalue);
}else if (answer.operator === "Multiplication") {
    console.log(answer.Firstvalue * answer.Secondvalue);
}else if (answer.operator === "Division") {
    console.log(answer.Firstvalue / answer.Secondvalue);
}else if (answer.operator === "Exponential") {
    console.log(answer.Firstvalue ** answer.Secondvalue);
}else if (answer.operator === "Modulus") {
    console.log(answer.Firstvalue % answer.Secondvalue);
}else  {
    console.log("You could not find valid value");
}