#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgWhiteBright.underline.bold.italic.redBright("WELCOME! TO SIMPLE CURRENCY COVERTER"));

const currency :any = {
  USD: 1, //Base Currency
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.30,
  PKR: 277.54,
};

let userAnswer = await inquirer.prompt(
  [
    {
      name: "from",
      message: chalk.yellow("Enter From Currency"),
      type:"list",
      choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
      name: "to",
      message: chalk.yellow("Enter To Currency"),
      type: "list",
      choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
      name: "amount",
      message: "Enter Your Amount:",
      type: "number",
    },
  ]
);

//  CREATING A VARIABLE
let fromAmount = currency[userAnswer.from]; //exchange rate
let toAmount = currency[userAnswer.to]; //exchange rate
let amount = userAnswer.amount;

//CALCULATING OR CONVERTING AMOUNT TO DESIRED CURRENCY
let baseAmount = amount / fromAmount; //USD base currency / from amount
let convertedAmount = Math.floor(baseAmount * toAmount); //Usd base currency Multiply to amount

console.log((chalk.blueBright("Coverted Amount Is:")) +(chalk.green(convertedAmount)))