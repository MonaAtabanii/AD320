/* The challenge:
        1. Create a file named for-loop.js.
        2. Define a variable named total and make it equal the number 0.
        3. Define a second variable named limit and make it equal the number 10.
        4. Create a for loop with a variable i starting at 0 and increasing by 1 each time through the loop. The loop should run as long as i is less than limit.
        5. On each iteration of the loop, add the number i to the total variable. To do this, you can use this statement: total += i
        6. After the for loop, use console.log() to print the total variable to the terminal.
*/

let total = 0;
let limit = 10;
for(let i = 0; i < limit; i++) {
    total += i;
}
console.log(total);