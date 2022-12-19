// const user = {
//     id: 2022-89-89,
//     name: 'Aashish Karki',
//     batch : 2078
// }

// // Converting Object into JSON

// let userJSON = JSON.stringify(user);
// console.log(userJSON);

// // Converting JSON into Object 

// console.log(JSON.parse(userJSON))

const json = '[{ "color": "blue" }, {"color": "red"}]'

const arr = JSON.parse(json);
console.log(arr);

console.log(arr[0].color);