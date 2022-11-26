var arrOfkeys = ["speed", "altitude", "color"];
var drone = {
  speed: 100,
  altitude: 200,
  color: "red",
};

drone.price = "500USD";
console.log(drone[arrOfkeys[0]]);

for (var i = 0; i <= arrOfkeys.length; i++) {
  console.log(drone[arrOfkeys[i]]);
}
