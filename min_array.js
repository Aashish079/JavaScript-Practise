let array = [10,4,9,2,40,50]

const min = () => {
    let minimum = array[0];
    for (const num of array) {
        if(minimum>num){
            minimum = num;
        }
    }

    return minimum;
}

console.log(`Minimum value is ${ min() }`)

// Efficient code
console.log(Math.min.apply(Math,array));