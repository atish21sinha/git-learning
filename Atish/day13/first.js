let obj={
    name:"atish",
    age:22,
    gender:"male",
    city:"buxar"
    

};
//for in loop
/*for(let key in obj)
{
    console.log(key,obj[key])
}*/

let obj2=Object.create(obj);
obj2.money=420;
obj2.id="roh";
//console.log(obj2.name)
console.log(Object.keys(obj2));
for(let key in obj2)
{
    console.log(key);
}