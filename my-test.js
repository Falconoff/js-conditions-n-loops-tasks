function sortByAsc(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sortByAsc(left).concat(pivot, sortByAsc(right));
}

console.log(sortByAsc([-2, 9, 5, -3]));
// => => [-3, -2, 5, 9]

// console.log(isContainNumber(123450, 1));
// // => true
// console.log(isContainNumber(123450, 3));
// // => true
// console.log(isContainNumber(123450, 7));
// false
