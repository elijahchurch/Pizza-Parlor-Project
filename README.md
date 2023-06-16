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
**Code:** const newPizza = new Pizza(["pepperoni", "sausage"], "small", cost: 0)\
          newPizza.calculateCost()\
**Expected Output:** newPizza --> Pizza{...., size:"small", cost: 10}

**Test:** "It will calculate and enter a cost of $15 to the cost property if the size property is medium"\
**Code:** Pizza {....., size: "medium", cost: 0}\
          Pizza.calculateCost()\
**Expected Output:** Pizza {....., size: "medium", cost: 15}

**Test:** "It will calculate and enter a cost of $20 to the cost property if the size property is large"\
**Code:** Pizza {....., size: "large", cost: 0}\
          Pizza.calculateCost()\
**Expected Output:** Pizza {....., size: "large", cost: 20}

**Test:** "It will calculate and enter a cost of $20 to the cost property if the size property is extra-large"\
**Code:** Pizza {....., size: "extra-large", cost: 0}\
          Pizza.calculateCost()\
**Expected Output:** Pizza {....., size: "extra-large", cost: "25"}

**Test:** "It will add 1.50 to the cost property for each array element in the toppings property, in addition to the calculation for the size property"
**Code** Pizza {toppings: ["pepperoni", "sausage"], size: small, cost: 0}\
Pizza.calcualteCost()\
**Expected Output:** Pizza {Pizza toppings: ["pepperoni", "sausage"], size: small, cost: 13}