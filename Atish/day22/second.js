const grandParent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');

child.addEventListener('click',()=>{
    console.log("child clicked");
    event.stopPropagation();
},false)
parent.addEventListener('click',()=>{
    console.log("parent clicked");
},false)
grandParent.addEventListener('click',()=>{
    console.log("grandParent clicked");
},false)