placeOrder(cart,(order)=>{
    preparingOrder(order,(foodDetails)=>{
        pickupOrder(foodDetails,(droplocation)=>{
            deliverOrder(droplocation);
        });
    })
})













const prom=placeOrder(cart);
prom.then((order)=>{
    preparingOrder(order);
    
})