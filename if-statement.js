/* The challenge:
    1. Create a file named if-statement.js.
    2. Declare a variable named fruit.
    3. Make the fruit variable reference the string value "orange".
    4. Use console.log() to print "The fruit name has more than five characters." if the length of the value of fruit is greater than five. Otherwise, print "The fruit name has five characters or less."
*/

let fruit = 'orange';
if (fruit.length > 5)
{
    console.log('The fruit name has more than five characters.');
}
else
{
    console.log('The fruit name has five characters or less.');
}