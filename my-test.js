function isContainNumber(num, digit) {
  const numToString = '' + num;
  const digitToString = '' + digit;

  const nts = String(num);

  console.log(nts === numToString);
  // for (let i = 0; i < numToString.length; i += 1) {
  //   if (numToString[i] === digitToString) {
  //     return true;
  //   }
  // }
  // return false;
}

console.log(isContainNumber(123450, 0));
// => true
console.log(isContainNumber(123450, 1));
// => true
console.log(isContainNumber(123450, 3));
// => true
console.log(isContainNumber(123450, 7));
// false
