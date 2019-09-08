const input = process.argv;
let annualInterest = 0;
let totalInterest = 0;

function compoundInterest(number, interest, years) {
  let originalNumber = number;
  for (let i = 1; i <= years; i++) {
    number = number + (number * interest/100);
  }
  console.log("Total: ", number);
  console.log("Total interest: ", number - originalNumber);
}

console.log(compoundInterest(Number(input[2]), input[3], input[4]));
