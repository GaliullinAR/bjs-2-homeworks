  "use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  // код для задачи №1 писать здесь
  discriminant = (Math.pow(b, 2)) - (4 * a * c);
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
    console.log(arr);
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №2 писать здесь
  let totalAmount = 0;
  let today = new Date(2022, 5, 11);
  let firstPayment = parseFloat(contribution);
  let loanRate = parseFloat(percent) / 12;
  let amountOfCredit = parseFloat(amount);

  let numberOfMonths =
    (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth()) + 1;
  

  if (Number.isNaN(loanRate)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(firstPayment)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (Number.isNaN(amountOfCredit)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

  let loanAmount = amountOfCredit - firstPayment;

  let percentOfMonth = loanRate / 100;

  let totalMonphlyPayment =
    loanAmount *
    (percentOfMonth + percentOfMonth / (Math.pow(1 + percentOfMonth, numberOfMonths) - 1));
  totalAmount = totalMonphlyPayment * numberOfMonths;

  totalAmount = Number(totalAmount.toFixed(2));
  console.log(totalAmount);
  
  return totalAmount;
}

