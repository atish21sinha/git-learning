function timing(){

const timer = document.getElementById('root');
const now = new Date();
const INDIANTIME = now.toLocaleTimeString();

timer.innerHTML = INDIANTIME;
}

setInterval(timing,1000);
const timer=document.getElementById('root')
timer.style.fontSize = "200px";

// center using body
timer.style.display = "flex";
timer.style.height ="100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.backgroundColor= "orange";
    
