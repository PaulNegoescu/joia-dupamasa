'use strict';

const propName = 'doSomething';
const a = {
  prop: 'orice',
  0: 'dasdas',
  1: function() {
    return 'saddasd';
  },
  [propName]: function() {
    return 'adadas';
  }
};

a[propName] = 'wweqweqw'


console.log(a.doSomething);

/*
const arr = [1, 2, 3, 4, 6, 3.15];
for (const num of arr) {
  console.log(num);
}


for(let i = 0; i < arr.length; i++) {
  const num = arr[i];
  console.log(num);
}

{
  let i = 0;
  while(i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

console.log(i);

// let
// const
*/
const arr = [1, 2, 3, 4, 6, 3.15];
// const arr2 = [];
// for(const num of arr) {
//   arr2.push(num ** 2);
// }

// function declaration
function add(a, b) {
  return a + b;
}

// function expression
const add2 = function(a, b) {
  return a + b;
};

// IIFE - Immediately Invoked Function Expression
(function() {
  console.log('dasdsa');
})();

// arrow function
const add3 = (a, b) => a + b;

(function (){
  //undefined
const o1 = {
  func() {
    console.log(this);
  },
  func2: () => console.log(this)
}

const test = o1.func2;

o1.func2();
test();
})();
console.log(add(2, 4), add2(1, 5), add3(10, 13));

// const arr3 = [];
// arr.forEach((num) => arr3.push(num ** 2));
// console.log(arr3);

const arr3 = arr
              .map((num) => num ** 2)
              .filter((num) => num % 2 === 0)
console.log(arr3);
