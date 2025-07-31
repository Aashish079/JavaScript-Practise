//What is Closure?
// A closure is the combination of a function and the lexical environment within which that function was declared.
// Lexical Scope: A function can access all the variables and functions defined inside the scope in which it is defined.
// Closure Senario:
// 1. A function defined inside another function
// 2. The inner function has access to the variables in the outer function
// 3. The outer function returns the inner function

// Example 1
function outer(){
    let outerVar = 'outer';
    
    
    return function inner(){
        let innerVar = 'inner';
        console.log(outerVar);
        console.log(innerVar);
    }
}  