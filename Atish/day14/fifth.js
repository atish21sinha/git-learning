    /*let arr=[10,20,30,40,50];
    arr.forEach(function(num){
        console.log(num)
    })

         let arr=[10,20,30,40,50];
    arr.forEach((num)=>{
        console.log(num)
    })
   //filter method
   let arr=[10,20,35,40,50];
   const result= arr.filter((num)=>{
     return  num%2==0;

   })
   console.log(result);

   const students=[
    {name:"atish",age:22,marks:40},
    {name:"rohit",age:22,marks:50},
    {name:"mohit",age:22,marks:59},
   ]
   const result=students.filter((obj)=>{
    return obj.marks>50;
   })
   console.log(result)
   //map
   const arr=[1,2,4,5]
   const result=arr.map((num)=>{
    return num*num
    });
    console.log(result)*/
     const arr=[1,2,4,5,6]
   const result=arr.filter((num)=> num%2==0).map((num)=> num*num);
   console.log(result);