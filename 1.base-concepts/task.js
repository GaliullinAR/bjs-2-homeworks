"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant;
  // код для задачи №1 писать здесь
  discriminant = (Math.pow(b, 2)) - (4 * a * c);
  console.log(Math.pow(b, 2));
  console.log(discriminant);
  if (discriminant < 0) {
    console.log(arr);
    return arr;
    
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
    console.log(arr);
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
    console.log(arr);
  }
  
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

