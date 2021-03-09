/* The challenge:
        1. Create a file named array-filtering.js.
        2. Define a variable named numbers that references this array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        3. Define a variable named filtered that references the result of numbers.filter().
        4. The function that you pass to the .filter() method will look something like this:
                function evenNumbers (number) {
                return number % 2 === 0
                }
        5. Use console.log() to print the filtered array to the terminal.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterd =  numbers.filter(function evenNumbers (number) { return number % 2 === 0 });
console.log(filterd);