const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello everyone");
    },5000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello everyo");
    },5000)
})
p1.then((response)=>console.log(response))
p2.then((response)=>console.log(response))


async function greet(params) {
    const data1=await p1;
    console.log(data1);
    const data2=await p1;
    console.log(data2)
    
}
greet();