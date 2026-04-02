//how to create object
 obj={
    0:20,
    1:50,
    2:70,
    name:"atish",
    account_balance:420,
    gender:"male",
    age:30,
    undefined:30

}
/*console.log(obj.name);
console.log(obj["gender"]);
console.log(obj["account_balance"]);
console.log(obj);*/


//const arr=[20,50,70];
//console.log(arr[1],obj[1]);
//console.log(obj.undefined);
// property add
const person=new Object();
person.name="atish"
person.age=22;
person.gender="male";
console.log(person);
//delete
delete person.age;
console.log(person);