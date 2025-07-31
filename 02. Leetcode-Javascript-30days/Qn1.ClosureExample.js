//Closure Defn: A closure is a function having access to the parent scope, even after the parent function has closed.
function createCounter(){ //Factory function is used to create a closure
    let value = 0; //Clousure variable is used for hidden state

    function increment(){
        return ++value; 
    }

    return{
        increment:increment
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());