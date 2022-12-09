const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// compact Form

fruits.forEach(function display(fruit, index){
    console.log(`${index}. ${fruit}`);
})

//Using arrow function

fruits.forEach((fruit, index)=>console.log(`${index}. ${fruit}`));

// filter method

const nums = [0,10,20,30,40,50];

const gt_than_10 = nums.filter((num)=>{return num>10});

console.log(gt_than_10);

// mapping
console.log([0,10,20,30,40,50].map((num)=>{return num/10}));

nums.push(60,70,80,90,100);
nums.pop();
nums.pop();
nums.pop();

console.log(nums);

// Converting Object into Array

let array = [];
let car = {
    color : 'yellow',
    speed : 746
}
let keys = Object.keys(car);
keys.forEach((key)=>array.push(key, car[key]));
console.log(array);

// Maps ====> .set .get

let best = new Map();

best.set(1, 'The Champ');
best.set(2, 'Rockstar');
best.set(3, 'Scientist');
best.set(4, 'Enterpreneuer')

console.log(best);
console.log(best.get(4));

