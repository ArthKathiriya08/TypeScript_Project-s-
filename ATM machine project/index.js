"use strict";
// ATM Machine Project
let accountPin = 2008;
let enteredPin = 2008; // Enter PIN manually for testing
let balance = 5000; // Initial account balance
// Check if entered PIN is correct
if (enteredPin === accountPin) {
    console.log("PIN Verified Successfully!");
    // Choice option (change manually for testing)
    let choice = 1;
    // Loop until user selects Exit
    while (choice !== 4) {
        // Change this value manually to test different options
        choice = 2;
        // Perform operation based on user choice
        switch (choice) {
            // Check account balance
            case 1:
                console.log("Current Balance: ₹" + balance);
                choice = 4;
                break;
            // Withdraw money
            case 2:
                let withdrawAmount = 1000;
                // Check if balance is sufficient
                if (withdrawAmount <= balance) {
                    balance = balance - withdrawAmount;
                    console.log("Withdraw Successful");
                    console.log("Remaining Balance: ₹" + balance);
                }
                else {
                    console.log("Insufficient Balance");
                }
                choice = 4;
                break;
            // Deposit money
            case 3:
                let depositAmount = 2000;
                // Add amount to balance
                balance = balance + depositAmount;
                console.log("Deposit Successful");
                console.log("Current Balance: ₹" + balance);
                choice = 4;
                break;
            case 4:
                console.log("Thank You! Visit Again.");
                break;
            default:
                console.log("Invalid Choice");
                choice = 4;
        }
    }
}
else {
    console.log("Incorrect PIN");
}
