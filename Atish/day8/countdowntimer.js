// countdown timer
const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");


const date=date2-date1;
const days=Math.floor(date/(1000*60*60*24));
//console.log(days);
const hour=Math.floor((date/(1000*60*60))%24);
const minute=Math.floor((date/(1000*60*60))%60);
const second=Math.floor((date/(1000*60*60))%60);
//console.log(hour);
console.log(` olympics countdowntime:Days:${days} hour:${hour} minute:${minute} second:${second}`);