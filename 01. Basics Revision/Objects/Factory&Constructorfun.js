// Factory Function

const createCircle = (x,y)=>{
    return {
        radius:1,
        coordinates:{
            x:x,
            y, // if the key and value are same you can simply write key and value will be assigned automatically
        },
        isVisible: true,
        showCoordinates:()=>{
            console.log(`${x}, ${y}`)
        }
    };
}

const c1 = createCircle(5,6);
const c2 = createCirlce(2,4);

console.log(c1);
console.log(c2);

// Constructor Function

function Cricle()