// Filter, Reduce, Map

// 1. Filter the array for numbers that are [positive]
const numbers = [1, -1, 2, 3];
const filtered = numbers.filter((number) => number >= 0);
console.log(filtered); //output: [1,2,3]

// 2. Map method:
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items); //output: ["<li>1</li>", "<li>2</li>", "<li>3</li>"]
const html = '<ul>' + items.join(' ') + '</ul>';
console.log(html); //output: <ul><li>1</li> <li>2</li> <li>3</li></ul>

// Chaining and mapping the array into objects

const id = ['001', '002', '003', '004'];
const name = ['Aman', 'Arbid', 'Aryan', 'Aashish'];

const result = id
    .filter((id)=>id.length ===3)
    .map((id, index)=>({id: id, name: name[index]}));

console.log(result); // output is [{id: "001", name: "Aman"},{id: "002", name: "Arbid"},{id: "003", name: "Aryan"},{id: "004", name: "Aashish"}]

// 3. Reduce method:
console.log(numbers);//output: [1, -1, 2, 3]
let sum = 0;
for(let n of numbers)
    sum += n;

console.log(sum); //output: 5

//More elegant way of doing the same thing

const sum1 = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0);

console.log(sum1); //output: 5
