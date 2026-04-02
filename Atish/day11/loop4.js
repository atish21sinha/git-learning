const obj={
    name:"atish",
    age:"30",
    amount:420,
    city:"buxar"
}
//const a=Object.values(obj);
//console.log(a);
const key=Object.keys(obj);
for(let i=0;i<key.length;i++)
{
    console.log(obj[key[i]]);
}