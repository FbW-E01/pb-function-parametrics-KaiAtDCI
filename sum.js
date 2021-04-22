// Create a function sum which accepts any amount of numbers and return the sum of their addition

// old version
// const sum_old = (...numbers) => {
//     let result = 0;
//     numbers.forEach(value => result += value);
//     return result;
// };

// reducer version
const sum = (...numbers) => numbers.reduce((accu, current) => accu + current);
console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
