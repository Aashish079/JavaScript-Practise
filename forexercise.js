// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    
    for (product of dairy) {
        console.log(product);
    }
}
logDairy();

// Task 2
function birdCan(){
    let animal = {
    
    canJump: true
    
    };
    
    let bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

    for (prop of Object.keys(bird)) {
        console.log(prop, ":", bird[prop]);
    }
}
birdCan();

// Task 3

function animalCan(){
    const animal = {
    
    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

    for (prop in animal) {
        console.log(prop, ":", animal[prop]);
    }


}

animalCan();

