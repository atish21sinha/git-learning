/*const arr=[3,2,1,5,10];
const[first,second, ,third]=arr;
console.log(first,second,third);*/


let obj={
    name:"atish",
    money:430,
    balance:30,
    age:20,
    aadhar:"jkkknknmm",
    address:{
        pincode:509000,
        city:"buxar"
    }
};

//const{name}=obj;
//console.log(name);

//const{address:adds}=obj;
//console.log(adds)

const{address:{pincode,city}}=obj;
console.log(pincode,city)

