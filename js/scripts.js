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

function handlePizzaOrderForm(event) {
    event.preventDefault();
    let toppings = [];
    let selectedToppings = document.querySelectorAll("input[name='toppings']:checked");
    selectedToppings.forEach(function (selection) {
        toppings.push(selection.value)
    });
    let pizzaSize = document.getElementById("pizza-size").value;
    console.log(typeof pizzaSize, pizzaSize, toppings);
}

window.addEventListener("load", function () {
    let pizzaForm = document.getElementById("pizza-order");
    pizzaForm.addEventListener("submit", handlePizzaOrderForm);
})
