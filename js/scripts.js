// Business Logic
function Pizza(toppingArray, inputSize) {
    this.toppings = toppingArray;
    this.size = inputSize;
    this.cost = 0;
}

Pizza.prototype.calculateCost = function () {
    this.cost += 1.5 * this.toppings.length;
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
    let newPizza = new Pizza(toppings, pizzaSize);
    newPizza.calculateCost();
    document.getElementById("order-size").innerText = newPizza.size;
    document.getElementById("order-cost").innerText = "$" + newPizza.cost.toFixed(2);
    let toppingList = document.createElement("ul")
    newPizza.toppings.forEach(function (topping) {
        let listItem = document.createElement("li");
        toppingList.append(listItem);
        listItem.innerText = topping;
    });
    document.getElementById("order-toppings").append(toppingList);
}

window.addEventListener("load", function () {
    let pizzaForm = document.getElementById("pizza-order");
    pizzaForm.addEventListener("submit", handlePizzaOrderForm);
});
