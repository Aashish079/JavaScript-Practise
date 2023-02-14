const names = [
    'Aashish',
    'Joe',
    'Rajesh',
    'Leeeeeee'
]

let mystery = names.filter((name1) => { 
    return name1.length > 4 ;}
)
.map((name1)=>{
    return name1.toUpperCase();
})
.filter((name2)=>{
    return name2.endsWith('E');
})

let frag = names.slice(1,-1)
console.log(frag)
console.log(mystery)