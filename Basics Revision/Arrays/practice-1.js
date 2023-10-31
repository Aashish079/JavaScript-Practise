const num = [1,2,3,4,5,6,7,8,9,10];

// Adding elements to an array

// 1. Add an element to the end of an array
num.push(11);
console.log("Array after PUSH",num);

// 2. Add an element to the beginning of an array
num.unshift(0)
console.log("Array after UNSHIFT",num);

// 3. Add an element to the middle of an array
num.splice(2, 0, 'a', 'b', 'c', 'd');

console.log("Array after SPLICE",num);

// Removing elements from an array

// 1. Remove an element from the end of an array
const last = num.pop();
console.log("Array after POP",num); // output is [1,2,3,4,5,6,7,8,9,10]
console.log("Removed element",last);// output is 11

// 2. Remove an element from the beginning of an array
const first = num.shift();
console.log("Array after SHIFT",num); // output is [2,3,4,5,6,7,8,9,10]
console.log("Removed element",first);// output is 1

// 3. Remove an element from the middle of an array
num.splice(2,1);
console.log("Array after SPLICE",num); // output is [2,3,5,6,7,8,9,10]

// Emptying an array
// Method 1
let empty = [1,2,3,5,6,7,7];
empty = [];
console.log("Empty array",empty);

// Method 2
empty = [1,2,3,5,6,7,7];
empty.length = 0; // this is the best way to empty an array(Just truncates the array)
console.log("Empty array",empty);

num.length = 0;
console.log("Empty array",num); // output is [] Even works if the array is const

// Method 3
empty = [1,2,3,5,6,7,7];
empty.splice(0,empty.length); // it is empty.length and not empty.length() because length is a property and not a method
console.log("Empty array",empty);

// Finding elements in an array (primitives)
console.log("Index of 5",num.indexOf(5)); // returns -1 if not found and its output in this case is 4
num.splice(9,0,5);
console.log("Index of last occurance of 5",num.lastIndexOf(5));// output in this case is 9
console.log(num.includes(0)); // returns true or false

// Finding elements in an array (reference types)
const courses = [
    {id : 1, name: 'Javascript'},
    {id : 2, name: 'Python'},
];

const foundcourse = courses.find(function(course){
    return course.name === 'Javascript';
});

console.log(foundcourse); // returns the first occurance of the element(returns the object)

const indexfoundcourse = courses.findIndex(function(course){
    return course.name === 'Javascript';
});

console.log(indexfoundcourse);