import print from './print'
import {
  cube,
  square,
} from './multiFunc'
import '../css/styles.css'

console.log('index2');
console.log(cube(5))
console.log(square(51))

// 需要加上才會啟動HMR
// if (module.hot) {
//   module.hot.accept()
// }