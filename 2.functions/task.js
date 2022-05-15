// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  let result = function getParams(arr) {
    console.log(arr)
    min = Infinity;
    max = -Infinity;
    sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
      
    sum += arr[i];
      
    }
    
    return { min: min, max: max, sum: sum };
  }

  result(arr);
  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  
  // Ваш код
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let max = -Infinity;
  let min = Infinity;
  let sum;
  
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  sum = max - min;

  
  return Math.abs(sum);
}
