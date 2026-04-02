const customer={
    name:"atish",
    age:22,
    account_number:123,
    balance:2000
}
///customer.name="abc";
Object.defineProperty(customer,"name",{
    writable:false,
})
customer.name="abc"
//customer.account_number=10001;
console.log(customer)