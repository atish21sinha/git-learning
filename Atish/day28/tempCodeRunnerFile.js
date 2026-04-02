//call back hell
fetchuser(greet)
function placeOrder(){
    console.log("talking with dominos")
    setTimeout(()=>{
        console.log("order placed successfully")
    },2000)
}
placeOrder();