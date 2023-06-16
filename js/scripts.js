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
    const selectedToppings = document.querySelectorAll("input[name='toppings']:checked");
    selectedToppings.forEach(function (selection) {
        toppings.push(selection.value)
    });
    const pizzaSize = document.getElementById("pizza-size").value;
    let newPizza = new Pizza(toppings, pizzaSize);
    newPizza.calculateCost();
    document.getElementById("order-size").innerText = newPizza.size;
    document.getElementById("order-cost").innerText = "$" + newPizza.cost.toFixed(2);
    const toppingList = document.createElement("ul")
    newPizza.toppings.forEach(function (topping) {
        const listItem = document.createElement("li");
        toppingList.append(listItem);
        listItem.innerText = topping;
    });
    document.getElementById("order-toppings").append(toppingList);
    document.getElementById("order-result").classList.remove("hidden");
    document.getElementById("starting-point").classList.add("hidden");
}

function resetBackToStart() {
    document.getElementById("order-result").classList.add("hidden");
    document.getElementById("starting-point").classList.remove("hidden");
    document.querySelector("ul").remove();
}


window.addEventListener("load", function () {
    const pizzaForm = document.getElementById("pizza-order");
    const newOrderButton = document.getElementById("new-order");
    const checkOutButton = document.getElementById("check-out");
    pizzaForm.addEventListener("submit", handlePizzaOrderForm);
    newOrderButton.addEventListener("click", function () {
        pizzaForm.reset();
        resetBackToStart();
    });
});
