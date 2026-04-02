//reduce
const arr=[10,20,30,40,50]
const reduce=arr.reduce((acc,curr)=>{
    //const result=arr.reduce(call back function, intialization)
    console.log(acc,curr);
    acc=acc+curr;
    return acc;
},0)
console.log(result);