const form = document.getElementById('quizForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop page reload

    const data = new FormData(form);
    const answers = Object.fromEntries(data.entries());

    let score = 0;

    // correct answers
    if (answers.q1 === "c") score++;
    if (answers.q2 === "b") score++;
    if (answers.q3 === "a") score++;

    document.getElementById("result").innerText =
        "Your Score: " + score + " / 3";
});