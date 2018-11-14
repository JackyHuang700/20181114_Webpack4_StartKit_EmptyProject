import printMe from './print'
import '../scss/main.scss'
import '../css/styles.css'
import {
  cube,
  square,
} from './multiFunc'
// 在dll內的套件
var _ = require('lodash');

console.log('index');


console.log('lodashhhhh', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 91 }))

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = "Hello webpack"

  btn.innerHTML = 'Click me and check the console!adsasdf';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component())
console.log(cube(5))
console.log(square(5))
// console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)

if (module.hot) {
  // module.hot.accept('./print.js', function() {
  //   console.log('Accepting the updated printMe module in index.js!');
  //   printMe();
  // })

}

// 需要加上才會啟動HMR
if (module.hot) {
  module.hot.accept()
}


function another_adder (...numbers) {
  // Create a list of numbers in the function
  const other_nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  // here, we are using the spread operator to concatenate numbers and other_nums into the same array,
  // in the same line where it is initialized.
  const all_nums = [...numbers, ...other_nums]
  let total = 0

  all_nums.forEach((n, i) => {
      // Type check to avoid turning this thing into a string, or creating some other error.
      if (typeof n === 'number') {
          total += n
      } else {
          console.log('can\'t add item at index' + i + '.')
      }
  })

  return total
}

console.log(another_adder(1, 2, 3, 4, 5, 6, 7, 8))


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }
[5, 6].map(n => console.log(n));