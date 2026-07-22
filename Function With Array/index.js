"use strict";
// Shopping Cart
const cart = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 800, category: "Clothing" },
    { name: "Watch", price: 1200, category: "Accessories" },
    { name: "USB Cable", price: 300, category: "Electronics" },
    { name: "Shoes", price: 2000, category: "Clothing" }
];
// Function to process cart
function processCart(cart) {
    // Apply 10% discount
    let discountCart = cart.map((item) => {
        if (item.price > 500) {
            item.price = item.price - (item.price * 10 / 100);
        }
        return item;
    });
    // Filter Electronics items
    let electronics = discountCart.filter((item) => {
        return item.category === "Electronics";
    });
    // Calculate total bill
    let totalBill = 0;
    electronics.forEach((item) => {
        totalBill = totalBill + item.price;
    });
    // Display Electronics items
    console.log("Electronics Items:");
    console.log(electronics);
    // Display Total Bill
    console.log("Total Bill:", totalBill);
}
// Function Call
processCart(cart);
