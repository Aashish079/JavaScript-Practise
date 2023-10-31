let nums = [1, 2, 3];
let numbers = [1, 2, 3];



console.log(nums == numbers); // false because they are compared with respect to there reference in memory

// but if we compare them with respect to there values they are equal
console.log(nums[0] == numbers[0]); // true

// Also
let userOne = {
    name: "Aashish",
    age: 20,
    role: "Topper"
}

let userTwo = userOne;

console.log(userOne == userTwo); // true because they are compared with respect to there reference in memory and userTwo is Alias of userOne


