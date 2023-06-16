# Pizza Parlor (working title)

#### By: Jason Elijah Church

#### A webpage where a user can order a pizza based on size and topping choice.

## Technologies Used

* HTML
* JavaScript
* Markdown
* CSS
* Git Bash
* Visual Code Studio

## Description:



## Tests for JavaScript functions:

**Describe:** Pizza()

**Test:** "It should create a Pizza object that has properties for toppings and size"\
**Code:** const newPizza = new Pizza(["pepperoni", "sausage"], "small")\
**Expected Output:** newPizza --> Pizza{ toppings: ["pepperoni", "sausage"], size: "small}

**Test:** "It will also create a Pizza Object with a cost property that has an initial value of 0"\
**Code:** const newPizza = new Pizza(["pepperoni", "sausage"], "small")\
**Expected Output:** newPizza --> Pizza{...., cost: 0}

**Describe:** Pizza.prototype.calculateCost() 

**Test:** "It will calculate and enter a cost of $10 to the cost property of a Pizza Object if the size of the Pizza Object is small"\
**Code:** const newPizza = new Pizza(["pepperoni", "sausage"], "small")\
          newPizza.calculateCost()\
**Expected Output:** newPizza --> Pizza{...., size:small, cost: 10}