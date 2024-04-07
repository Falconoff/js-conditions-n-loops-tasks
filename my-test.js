function getIndexOf(str, letter) {
  // let index = -1;

  for (let i = 0; i < str.length; i += 1) {
    // console.log(`str[${i}]:`, str[i]);
    if (letter === str[i]) {
      // console.log(`letter ${letter} == current ${str[i]}`);
      // console.log('index', index);
      // index = i;
      // console.log('index', index);
      // return index;
      return i;
      // } else {
      //   // console.log(`letter ${letter} !== current ${str[i]}`);
    }
  }
  // console.log('index', index);

  return -1;
}

console.log(getIndexOf('qwerty', 'q')); // 0
console.log(getIndexOf('qwerty', 'e')); // 2
console.log(getIndexOf('qwerty', 'Q')); // -1
console.log(getIndexOf('qwerty', 'p')); // -1
console.log(getIndexOf('qwerty', 't')); //  4
