cart=["pizza","coke","cake"]




function placeOrder(callback){
    console.log("talking with dominos")
    setTimeout(()=>{
        console.log("order placed successfully")
        callback();
    },2000)
}
function preparingOrder(){
    console.log("Pizza prepration started....")
    setTimeout(()=>{
        console.log("pizza preparation")
    },5000)
}
function pickupOrder(){
    setTimeout(()=>{
        console.log("pick order delivery boy")
    },3000)
}
placeOrder()
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder
    });
});