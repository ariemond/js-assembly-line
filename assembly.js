// these are some resources you need to make a taco. The ingredients are all in a fridge array.
let fridge = ['tomato', 'lettuce', 'salsa', 'sour cream', 'cheddar', 'mozzarella', 'chicken', 'steak', 'haddock', 'cilantro', 'lime', 'pickled turnip', 'cabbage'];

// and the recipes are in an object
let recipes = {
  "Classic taco": {
    "ingredients": ['taco', 'tomato', 'lettuce', 'salsa', 'sour cream', 'cheddar', 'chicken']
  },
  "Highland taco": {
    "ingredients": ['taco', 'salsa', 'sour cream', 'cheddar', 'steak']
  },
  "Sea taco": {
    "ingredients": ['taco', 'salsa', 'mozzarella', 'cilantro', 'lime', 'picked turnip', 'cabbage', 'haddock']
  }
};

// We'll have a bunch of customers coming in shortly, but first we have to prepare for the day.
// There is a vital ingredient currently missing from our fridge: the taco itself.
// let's go to the store and see if they have any in-stock.
let storeInventory = {
  "tomato": 5,
  "lettuce": 10,
  "taco": 3,
  "cheddar": 0,
  "salsa": 2,
  "sour cream": 0
};

// 1. write a conditional statement and check if any tacos are available in the store. 
// if there are at-least 1 of that item, print 'Buying taco...'
if (storeInventory.taco > 1) {
    console.log('Buying taco...')
};

// 2. then add the string 'taco' to the fridge array
fridge.push('taco');
console.log(fridge);


// ok, a bunch of customers have just walked in. Each one has a list of tacos they ordered...
let customers = [
  {
    "name":"Andre",
    "order": ["Classic Taco", "Classic Taco"]
  },
  {
    "name": "Josh",
    "order": ["Highland Taco", "Classic Taco"]
  },
  {
    "name": "Yash",
    "order": ["Classic Taco", "Sea Taco"]
  }
];

// Let's start making them and serving our guests!
// 3. create an empty array called 'orders'
let orders = [];


// 4. We're going to serve one customer at a time. What is the name of the first customer?
// Print out, "Now serving {customer name here}"
console.log('Now serving ' + [customers[0].name]);
console.log(`Now serving ${customers[0].name}`);


// 5. How many tacos did they order? Print out, "they ordered {number of tacos} tacos"
console.log(`They ordered ${customers[0].order.length} tacos`);

// 6. Add all the names of the tacos in their order to the 'orders' array from step 3.
for (let i = 0; i < customers[0].order.length; i++) {
    orders.push(customers[0].order[i])
};
console.log(orders);


// 7. Add your own order to the customers array, with your name and your taco orders.
let myOrder = {
    "name": "Ariana",
    "order": ["Fish Taco", "Classic Taco"]
};
customers.push(myOrder);
console.log(customers);

// 8. Serve the tacos! pop() one taco at a time out of the orders array, and print out "serving {name of taco}"
for (let i = 0; i < orders.length; i++) {
    console.log(`Serving ${orders.pop(i)}`);
}

// 9. The chef is asking you what the last taco you made was. Print out the last item of the last customer's order. "The last customer ordered {name of taco}"
let lastCustomer = customers[customers.length - 1];
console.log(`The last customer ordered ${lastCustomer.order[orders.length - 1]}`)

// BONUS QUESTIONS:
// 10. At the end of the day, the chef asks you the total # of tacos you made today. Print out, "Chef, I made {number of tacos} tacos today"
let sum = 0;

for (let i = 0; i < customers.length; i++) {
    sum = sum + customers[i].order.length;
}

console.log(`Chef, I made ${sum} tacos today!`)

// 11. Write a loop to do tasks 4-6 for every customer, instead of writing it out over and over.
for (let i = 0; i < customers.length; i++) {
    console.log(`Now serving ${customers[i].name}`);
    console.log(`They ordered ${customers[i].order.length} tacos`);

    for (let j = 0; j < customers[i].order.length; j++) {
        orders.push(customers[i].order[j])
    }
}

console.log(orders);