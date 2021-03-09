/* The challenge:
      1. Create a file named object-keys.js.
      2. Define a variable named car like this:
          const car = {
            make: 'Honda',
            model: 'Accord',
            year: 2020
          }
      3. Define another variable named keys like this:
          const keys = Object.keys(car)
      4. Use console.log() to print the keys variable to the terminal.
*/

const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
const keys = Object.keys(car); 
console.log(keys);