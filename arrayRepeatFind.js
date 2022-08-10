//JAVASCRIPT | program to find repeating numbers

//variables
const array = [1, 2, 1, 3, 4, 3, 5, 6, 7, 8, 8];

//Utils| function that filters array by index values
const findRepeatNumbers = array => array.filter((number, order) => array.indexOf(number) !== order);

//results
const repeatNumbers = findRepeatNumbers(array);

console.log(repeatNumbers);