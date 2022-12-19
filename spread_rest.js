// spread
const places = [
    'ktm',
    'brt',
    'drn',
    'pkr',
    'btl',
    'htd'
]
const obj = {
    color : 'red',
    power : 746
}

// console.log(...obj);
console.log(...places);

// rest

function add(...args){ // Rest Operator allowed us to take multiple indefinite numbers for argument
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8,9,10));

// const [] = places;

// const [first, second, ...secondList] = places;

// console.log(first, second);
// console.log(secondList)


// Sum of Arrays using spread and rest operators:

function sumArray(...args){ // Rest operator, Creates an array out of individual elements provided
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return sum;
}

const array = [1,2,3,4,5,6,7,8,9,10];

console.log(sumArray(...array));