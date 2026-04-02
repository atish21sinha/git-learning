const quiz = [
  {
    question: "Who is known as the God of Cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Ricky Ponting"],
    correctAnswer: 1
  },
  {
    question: "How many players are there in one cricket team?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2
  },
  {
    question: "Which country won the 2019 Cricket World Cup?",
    options: ["India", "Australia", "England", "New Zealand"],
    correctAnswer: 2
  },
  {
    question: "Who is called Captain Cool?",
    options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Steve Smith"],
    correctAnswer: 2
  }
];

function RandomQuestion() {
 /* const data = new Set();

  while (data.size != 4) {
    const index = Math.floor(Math.random() * quiz.length);
    data.add(quiz[index]);
  }

  return [...data];*/
  // random sort
 /* quiz.sort(()=>Math.random()-0.5);
  return quiz.slice(0,5)*/
  const arr=[];
  let length=quiz.length;
  for(let i=0;i<5;i++)
  {
    const index=Math.floor(Math.random()*length);
    arr.push(quiz[index]);
    //swap
    [quiz[index],quiz[length-1]]=[quiz[length-1],quiz[index]];
    length--;
  }
  return arr;
}

const form = document.querySelector('#quizform');
const problem = RandomQuestion();
const original_answer={};



problem.forEach((obj, index) => {
  const div_element = document.createElement('div');
  div_element.className = 'question';
  

  const para = document.createElement('p');
  para.textContent = `${index + 1}. ${obj.question}`;
  div_element.appendChild(para);
  original_answer[`q${index + 1}`] = obj.options[obj.correctAnswer];

  obj.options.forEach((value) => {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = value;

    label.appendChild(input);
    label.appendChild(document.createTextNode(value));

    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
  });

  form.appendChild(div_element);
});
const button=document.createElement('button');
button.type='submit';
button.className="submit-btn";
button.textContent="submit";
form.appendChild(button);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const data = new FormData(form);
    const answers = Object.fromEntries(data.entries());

    let score = 0;

    for (let key in answers) {
        if (answers[key] === original_answer[key]) {
            score++;
        }
    }

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + problem.length;
});

