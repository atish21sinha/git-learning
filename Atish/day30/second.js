document.querySelector('button').addEventListener('click',()=>{
    const place=document.getElementById('location').value;
    function updateTemp(data){
       const element= document.getElementById(`weather Info`);
element.innerHTML=`Today's Temperature:${data.current.temp_c}`
        
        
    }

const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=622a42e4023c4726a3a172420262703&q=${place}&aqi=no`);
prom
.then(response=>response.json())
.then(data=>updateTemp(data))

})