//Event Bubbling First child's event will be fired then parent's event will be fired
document.querySelector(".parent")
.addEventListener("click", () => {
    alert("Hello from parent div");
}, true);
// Event Capturing First parent's event will be fired then child's event will be fired
document.querySelector(".child")
.addEventListener("click", () => {
    alert("Hello from child div ")
}, true);