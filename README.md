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
This webpage was made with HTML and styled with CSS. It contains an order form where the user can create a pizza by selecting any number of desired toppings from checkbox inputs and a pizza size from a selector input. When the form is submitted, the HTML div where the form existed is hidden, and a previously hidden div appears displaying user's pizza order and the final cost calculated from the user's inputs. On the JavaScript end of things, when the form is submitted a constructor function is used to make an Object with properties whose values are defined by the user input values and with an additional cost property whose base value starts at 0. A custom prototype method for the Object is then called upon it, that checks the toppings and size property values via branching and adds value to the cost property based on the defined logic. The object's properties are targeted and added to the next HTML where specified. 

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

## Setup/ Installation Requirements

* Clone this repository to your desktop.
* In the topmost directory of the project, open up all of the code using Visual Code Studio or a similar application to view the written code.
* The webpage itself can be viewed and interacted with by right-clicking the index.html in Visual Code and opening up a Live Server or visiting this [webpage hosted by github]().

## Known Bugs

* The checkout button currently has no created functionality. If time allowed, it would have directed the user to another hidden div where the user could enter his address information for online checkout.

## License

MIT

Copyright (c) 2023 Jason Elijah Church
