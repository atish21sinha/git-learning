/*let obj={};
obj.name="atish";
obj.age=20;
console.log(Object.getOwnPropertyDescriptors(obj,'name'))
obj.name="mohit"*/


let obj={};
Object.defineproperty(obj,'name',{
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:true,

})
console.log(obj)
