#! /usr/bin/env node


import inquirer from "inquirer";

const cuerrency:any = {
    PKR : 276,
    USD : 1,
    EUR : 0.92,
    INR : 76,    
    GBP : 0.76
}

let userAnswer = await inquirer.prompt(
   [
        {
            name : "from",
            message : "Enter from Cuerrency",
            type : "list",
            choices : ["PKR","USD","EUR","INR","GBP"]    
        },

        {
            name : "to",
            message : "Enter to Cuerrency",
            type : "list",
            choices : ["PKR","USD","EUR","INR","GBP"]  
        },

        {
            name : "amount",
            message :"Enter Your Amount",
            type : "number"
        }

   ]
)


let fromAmount = cuerrency[userAnswer.from];
let toAmount = cuerrency[userAnswer.to];
let $amount = userAnswer.amount
let baseAmount = $amount / fromAmount
let convertAmount = baseAmount * toAmount

console.log(`Your ${userAnswer.to} value is: ${convertAmount}`);


