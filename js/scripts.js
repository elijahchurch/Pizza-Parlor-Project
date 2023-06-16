function Pizza(toppingArray, inputSize) {
    this.toppings = toppingArray;
    this.size = inputSize;
    this.cost = 0;
}

Pizza.prototype.calculateCost = function () {
    if (this.size === "small") {
        this.cost += 10;
    } else if (this.size === "medium") {
        this.cost += 15;
    }
};
