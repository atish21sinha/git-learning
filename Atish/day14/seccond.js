const obj={
    name:"atish",
    age:22,

};
/*for(let value of obj){
    console.log(value);
}*/

for(let value of Object.keys(obj))
    console.log(value,obj[value]);