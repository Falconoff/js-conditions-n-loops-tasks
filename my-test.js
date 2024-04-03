function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a || a + c <= b) {
    console.log('2');

    return false;
  }
  if (a === b || a === c || (b === c && a > 0 && b > 0 && c > 0)) {
    console.log('1');
    return true;
  }
  console.log('3');

  return false;
}

console.log(isIsoscelesTriangle(2, 2, 2));
console.log(isIsoscelesTriangle(2, 2, 3));
console.log(isIsoscelesTriangle(3, 2, 3));

console.log(isIsoscelesTriangle(3, 2, 4));

console.log(isIsoscelesTriangle(2, 2, 4));
console.log(isIsoscelesTriangle(5, 2, 2));
