const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
    const tax = 1.2;
    let taxBoolean = true;
for (object of dishData) {
    let finalPrice;
    if (taxBoolean)
        finalPrice = object.price * tax;
    else if(!taxBoolean)
        finalPrice = object.price;
    else{
        console.log("You need to pass a boolean to the getPrices call!");
        return;
    }

    console.log(`Dish: ${object.name} Price: $${finalPrice}`);
}
