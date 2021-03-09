/* The challenge:
        1. Create a file named looping-through-arrays.js.
        2. Define a variable named pets that references this array: ['cat', 'dog', 'rat']
        3. Create a for loop that changes each string in the array so that they are plural.
                (hint: use a statement like this inside the for loop: pets[i] = pets[i] + 's')
        4. After the for loop, use console.log() to print the pets array to the terminal.
*/

let pets = ['cat', 'dog', 'rat']; 
for(let i = 0; i < pets.length;i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);