let user1 = {
    name: "atish",
    age: 22
}

let user2 = {
    amount: 20,
    money: 50
}

user2._proto__ = user1;

//console.log(user2.name);

let arr=[10,20,30,40];
console.log(arr._proto_==Array.prototoype)