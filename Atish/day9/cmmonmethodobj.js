let obj={
    name:"atish",
    account_balance:420,
    gender:"male"
};
//const arr=Object.keys(obj);
//console.log(arr);
const arr=Object.values(obj);
console.log(arr);

//keys;values
const arr2=Object.entries(obj);
console.log(arr2);
//assign use case
const obj1={a:1,b:2};
const obj2={c:3,d:4};

//let obj3=obj1+obj2;
const obj3=Object.assign({},obj1,obj2);
console.log(obj3,obj2);
//console.log(obj1.a);
const obj5={...obj1,...obj2,...obj4};
console.log(obj5);




