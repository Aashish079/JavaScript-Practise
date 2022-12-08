var car = {
    color : 'red',
    price : "30,000,0000",
    type : "Luxury"

}
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(car['color']);

// for(key of Object.keys(car)){
//     console.log(key, ":", car[key]);
// }
for( prop in car){
    console.log(prop);
}
// for(value of Object.values(car)){
//     console.log(value);
// }