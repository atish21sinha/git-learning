/*let user={
    name:"atish",
    age:22

}
Object.defineProperty(user,'name',{
    writable:false,
    
})
user.name="mohit";
console.log(Object.getOwnPropertyDescriptor(user,"name"))*/

//for of loop
const arr=[10,20,11,18,13];
for(let value of arr)
{
    console.log(value);
}
let str="atish is good boy";
for(let value of str)
{
    console.log(value);
}