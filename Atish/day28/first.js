//call back function
function fetchuser(callback){
    setTimeout(()=>{
        console.log("data fetched successfully")
        const name="atiish"
        
        callback(name)
    },2000)
    
}
function greet(name){
    console.log(`Hello ${name},i will meet in delhi`);
}
function meet(name){
    console.log(`Hello ${name},i will meet in delhi`);
}
function edit(name){
    console.log(`Edit ${name},of the user`)
}
fetchuser(meet);
fetchuser(greet);
fetchuser(edit)