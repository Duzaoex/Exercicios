// const sum = require('./sum')
// console.log(sum(1,2))

// const operations = require('./operations');
// console.log(operations.multiply(3,5))

const {subtract: subtrair, sum} = require('./operations');
 
const resultado = subtrair(10, 1)
const resultado2 = sum(2,1);
const resultado3 = sum(5,1);

console.log(resultado, resultado2, resultado3)