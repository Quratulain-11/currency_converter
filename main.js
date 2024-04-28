#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \tWelcome to currency converter\t \n"));
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 200
};
let user_ans = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green("Enter from currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: chalk.green("Enter to currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: chalk.blue("Enter your amount"),
        type: "number"
    }
]);
let fromAmount = currency[user_ans.from];
let toAmount = currency[user_ans.to];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.green(`converted Amount = ${chalk.yellow(convertedAmount.toFixed(1))} `));
console.log(chalk.blue.bold("\n \tThanks for using!😊\t \n "));
