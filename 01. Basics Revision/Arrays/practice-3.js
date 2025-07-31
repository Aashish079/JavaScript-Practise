// Iterating an Array
const numbers = [1,2,3,4,5,6,7,8,9,10];
// Method 1
for(let i = 0; i < numbers.length; i++)
    console.log(numbers[i]);

// Method 2
for(let number of numbers)
    console.log(number);

// Method 3
numbers.forEach((number)=>console.log(number));

// Joining Arrays
//The `join()` method in JavaScript is used to join all the elements of an array into a string. It takes an optional parameter which specifies the separator to be used between the array elements while joining them. If no separator is specified, a comma is used by default. In the code you provided, the `join()` method is used to join the elements of the `numbers` array into a string separated by a comma. The resulting string is stored in the `joined` variable.
console.log("Before joining",numbers);
const joined = numbers.join(',');
console.log(joined);
console.log("After joining",joined);

// Splitting a string
const message = "This is my first message";
const parts = message.split(' ');
console.log(parts);
// Creating URL slug
const hyphenated = parts.join('-');

console.log(hyphenated);

// Sorting Arrays
// numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.reverse();
const part = numbers.slice(2,7);
numbers.splice(3,0, ...part)
console.log("Unsorted Random Number:-",numbers);
numbers.sort((a,b)=>a-b);
console.log("Sorted Number:-",numbers);

// For shorting an array of objects

const courses = [
    {id: 1, name :'Node.js'},
    {id: 2, name :'Javascript'}
];

courses.sort((a,b)=>{
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
})

console.log(courses); //output is [{id: 2, name :'Javascript'},{id: 1, name :'Node.js'}]

