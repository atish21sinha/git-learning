let obj1={
    a:1,
    b:2
}
let obj2=obj1;
//shalow copy
obj2.a=10;
console.log(obj2,obj1);
//deep copy
let obj3=structuredClone(obj1);
obj3.a=20;
console.log(obj3,obj1);

//nested object
const user={
    name:"atish",
    balance:420,
    address:{
        picode:802119,
        city:"buxar"
    }
}
//console.log(user.address.picode)
//structureclone
const user2=Object.assign({},user);
console.log(user2);
user2.name="mohit";
console.log(user.name)