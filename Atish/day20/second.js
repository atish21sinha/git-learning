const quotes = [
  "Start before you feel ready – action creates confidence",
  "Small progress is still progress – consistency beats perfection",
  "Your future depends on what you do today – not tomorrow",
  "Discipline is stronger than motivation – motivation comes and goes",
  "Mistakes mean you’re learning – don’t fear them",
  "Focus on what you can control – ignore the rest",
  "Time once gone never comes back – use it wisely",
  "Comparison steals happiness – compete with yourself only",
  "Hard work always pays off – trust the process",
  "You are capable of more than you think – push your limits"
];     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     //function generatQuote(){
     
     
     
     /*const button=document.querySelector('button');
     button.addEventListener('mousemove',()=>{
          const text=document.getElementById("quote");
     const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];





     })*/
    document.addEventListener('keydown',()=>{
     if(event.key=="Enter"){
    const text=document.getElementById("quote");
     const index=Math.floor(Math.random()*quotes.length);
text.textContent=quotes[index];
     }

    })