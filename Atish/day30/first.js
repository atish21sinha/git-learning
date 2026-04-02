//  async task
/*console.log(3+4)
 const obj=fetch(``)
 setTimeout(()=>{
    console.log(obj)
 },2000)
 console.log(4+5)
 console.log(obj);*/

 const promises=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`)
 const pro2=promises.then((response)=>{
    return response.json();
 })
 .then((data)=>{
    console.log(data)
 })