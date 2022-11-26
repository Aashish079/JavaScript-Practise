function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);

    return arr;
}

var newArray = arrayBuilder('red', 'blue', 'green');

for(var i=0; i<newArray.length; i++){
    console.log(newArray[i]);
}
