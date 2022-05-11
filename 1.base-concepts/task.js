

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
  let totalAmount;

  if (Number.isNaN(+percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(+contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (Number.isNaN(+amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }

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

