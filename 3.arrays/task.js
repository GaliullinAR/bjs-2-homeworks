function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]); // boolean
}

function advancedFilter(arr) {
  let result;
  result = arr.filter((item) => item > 0 && item % 3 === 0).map(item => item * 10);
  return result;
}

