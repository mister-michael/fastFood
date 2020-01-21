const restaurant = {
    name: "Bob's Burgers",

    orders: [],

    placeOrder: function (meal) {
        restaurant.orders.push(meal)
    },

    returnOrders: function() {
        return this.orders
    }
};

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium",
};

    const badBurger= {
    sandwichType: "beef",
    fries: false,
    drinkSize: "large",
};


// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(badBurger);

// Invoke the function to return the list of all orders
restaurant.returnOrders();
// Output all orders to the console using console.table()
console.table(restaurant.returnOrders());