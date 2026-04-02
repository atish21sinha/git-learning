const customer={
    name:"atish",
    age:22,
    account_number:123,
    balance:2000
}
//for(let key in customer)
Object.defineProperty(customer,"name",{
    enumerable:false,
})
//enumerable ,jis bhi key ka true hoga print karega
for(let key in customer)
    console.log(key)
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'tostring'))