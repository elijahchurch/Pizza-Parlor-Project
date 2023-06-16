// Business Logic
function Pizza(toppingArray, inputSize) {
    this.toppings = toppingArray;
    this.size = inputSize;
    this.cost = 0;
}

Pizza.prototype.calculateCost = function () {
    this.cost += 1.50 * this.toppings.length;
    if (this.size === "Small") {
        this.cost += 10;
    } else if (this.size === "Medium") {
        this.cost += 15;
    } else if (this.size === "Large") {
        this.cost += 20;
    } else if (this.size === "Extra-Large") {
        this.cost += 25;
    }
};

// UI Logic 

function handlePizzaOrderForm() {

}

window.addEventListener("load", function () {
    // form event listener 
})
