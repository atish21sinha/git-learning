const cart = ["pizza", "coke", "sandwich"];

function placeOrder(cart) {
    console.log("Talking with Dominos");

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const food_available = true;

            if (food_available) {
                console.log("Order placed successfully");
                const order = { orderId: 221, food: cart };
                resolve(order);
            } else {
                reject("Out of stock");
            }
        }, 2000);
    });
}

function preparingOrder(order) {
    console.log("Preparing your order...");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order prepared");
            const foodDetails = { ...order, status: "prepared" };
            resolve(foodDetails);
        }, 2000);
    });
}

function pickupOrder(foodDetails) {
    console.log("Rider picked up the order");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order is on the way");
            const droplocation = { ...foodDetails, rider: "Rahul" };
            resolve(droplocation);
        }, 2000);
    });
}

function deliverOrder(droplocation) {
    console.log("Delivering order...");
    console.log(`Order delivered by ${droplocation.rider}`);
    console.log("Enjoy your food 🍕");
}

async function greet() {
    try {
        const order = await placeOrder(cart);
        const foodDetails = await preparingOrder(order);
        const droplocation = await pickupOrder(foodDetails);
        deliverOrder(droplocation);
    } catch (error) {
        console.log("Error:", error);
    }
}

greet();