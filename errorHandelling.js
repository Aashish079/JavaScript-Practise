function addTwoNums(a,b){
    try{
        if(typeof(a) != 'number')
            throw new ReferenceError('the first argument is not a number.');//deliberately generates error/ creates err object
        else if(typeof(b) != 'number')
            throw new ReferenceError('the second argument is not a number.');
        else
            console.log(a+b);
    }catch(err){
        console.log(err);
    }
}

addTwoNums(5,"5");