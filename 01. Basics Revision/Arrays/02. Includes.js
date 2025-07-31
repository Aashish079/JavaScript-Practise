// Create a Userdefined Includes

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.includes(5));
console.log(includes(numbers,5));

function includes(array, searchElement) {
    for( i= 0; i< array.length; i++)// for of loop can also be used for(let element of array)
        if(array[i] === searchElement)
            return true;
    
    return false;
}
