

function solveEquation(a, b, c) {
  "use strict";
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
  "use strict";
    // код для задачи №2 писать здесь
  if (typeof percent === 'string') return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  if (typeof contribution === "string")
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  if (typeof amount === "string")
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;

  let totalAmount;
  let today = new Date(2022, 5, 6);
  let numberOfMonths =
    (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth()) + 1;
  
  let loanAmount = amount - contribution;
  let percentOfMonth = percent / 12 / 100;

  let totalMonphlyPayment =
    loanAmount *
    (percentOfMonth + percentOfMonth / (Math.pow(1 + percentOfMonth, numberOfMonths) - 1));
  totalAmount = totalMonphlyPayment * numberOfMonths;

  totalAmount = totalAmount.toFixed(2);
  totalAmount = Number(totalAmount);

  console.log(totalAmount);
  
  return totalAmount;
}

