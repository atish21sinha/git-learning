/*const sum=function(...number){
    //for loop sum nikal lenge
    console.log(number);
}
sum(2,3,4);*/
let obj={
    name:"atish",
    age:20,
    amount:420
}
/*function fun(obj1){
    console.log(obj1.name,obj1.amount);


}
fun(obj);*/
function fun({name,amount}){
    console.log(name,amount);


}
fun(obj);