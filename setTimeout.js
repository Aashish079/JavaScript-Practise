// About:
// setTimeout is a built-in JavaScript function that allows you to schedule a function to be executed after a specified amount of time has passed. The syntax for using setTimeout is as follows:

// setTimeout(callback, delay, arg1, arg2, ...);


// The first argument, callback, is a function that will be executed after the specified delay (in milliseconds) has passed. The second argument, delay, is the time in milliseconds before the function is executed. The remaining arguments (arg1, arg2, ...) are optional and can be used to pass arguments to the callback function.
 
 
 const funA = ()=> {
    setTimeout(function(){
        console.log("fun A");
    }, 3000)
 }

 const funB = ()=>{
    console.log("fun B");
 }

 funA();
 funB();
 