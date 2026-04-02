function fetchdata(callback){
    console.log("fetched info of user")
    setTimeout(()=>{
        console.log("user detailed successfully")
            const obj={
                name:"atish",
                age:22,
                city:"buxar",


            }
            callback(obj);
    },2000)
}
fetchdata(edit);