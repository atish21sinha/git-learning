const form=document.querySelector('form')

addEventListener('submit', (event)=>{
event.preventDefault();
     /*const first=document.getElementById("first");
     console.log(first.value);
     const second=document.getElementById("second")
     console.log(second.value)
document.getElemen=`${first.value}${second.value} is agood boy`*/
const data= new FormData(form);
console.log(data)


})

