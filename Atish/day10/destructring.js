

//destructuring of an object
let obj={
    name:"rohit",
    money:430,
    balance:20,
    age:22,

};
//const{name,balance}=obj;
//console.log(name,balance);

const  {name:full_name,balance:amount,age:umar}=obj;
console.log(full_name,amount,umar)