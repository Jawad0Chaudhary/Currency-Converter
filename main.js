#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgWhiteBright.underline.bold.italic.redBright("WELCOME! TO SIMPLE CURRENCY COVERTER"));
const currency = {
    USD: 1, //Base Currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.3,
    PKR: 277.54,
    KWD: 0.31,
    BHD: 0.38,
    OMR: 0.38,
    JPY: 151.61,
    BDT: 109.60,
    CNY: 7.23,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.yellow("Enter From Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD", "BHD", "OMR", "JPY", "BDT", "CNY"],
    },
    {
        name: "to",
        message: chalk.yellow("Enter To Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "KWD", "BHD", "OMR", "JPY", "BDT", "CNY"],
    },
    {
        name: "amount",
        message: "Enter Your Amount:",
        type: "number",
    },
]);
//  CREATING A VARIABLE
let fromAmount = currency[userAnswer.from]; //exchange rate
let toAmount = currency[userAnswer.to]; //exchange rate
let amount = userAnswer.amount;
//CALCULATING OR CONVERTING AMOUNT TO DESIRED CURRENCY
let baseAmount = amount / fromAmount; //USD base currency / from amount
let convertedAmount = Math.floor(baseAmount * toAmount); //Usd base currency Multiply to amount
console.log(chalk.blueBright("Coverted Amount Is:") + chalk.green(convertedAmount));
