
const original_answer=["Sachin Tendulkar"]

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();   // ✅ FIX HERE

    const data = new FormData(form);
    const answer = Array.from(data.values());

     let result=0;
     for(let i=0;i<answer.length;i++){
      if(answer[i]==original_answer)
         result++;
      }
      console.log(result);

});