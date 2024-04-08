function convertNumberToString(str) {
  return true;
}

console.log(convertNumberToString('1'));
// => 'one'
console.log(convertNumberToString('10'));
// => 'one zero'
console.log(convertNumberToString('-10'));
// => 'minus one zero'
console.log(convertNumberToString('10.5'));
// => 'one zero point five'
console.log(convertNumberToString('10,5'));
// => 'one zero point five'
console.log(convertNumberToString('1950.2'));
// => 'one nine five zero point two'
