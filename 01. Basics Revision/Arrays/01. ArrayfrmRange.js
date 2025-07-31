// Generate and array of numbers when the range is given

const numbers = arrayFromRange(-10, -4);

console.log(numbers); // output is [-10, -9, -8, -7, -6, -5, -4]

function arrayFromRange(min, max){
    const arr = [];
    for (let x = min; x<=max; x++){
        arr.push(x);
    }
    return arr;
}

