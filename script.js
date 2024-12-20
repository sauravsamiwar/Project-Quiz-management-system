const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "Java",
        d: "C++",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Markup Language",
        c: "Hyperlinks and Text Markup Language",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which is a front-end framework?",
        a: "Django",
        b: "Flask",
        c: "React",
        d: "Ruby on Rails",
        correct: "c",
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b",
    },
    {
        question: "Which of the following is a CSS framework?",
        a: "React",
        b: "Vue",
        c: "Bootstrap",
        d: "Angular",
        correct: "c",
    },
    {
        question: "What is the meaning of JIT ?",
        a: "java in time",
        b: "just in time",
        c: "join in time",
        d: "None of these",
        correct: "b",
    },
    {
        question: "Which is a JavaScript library?",
        a: "jQuery",
        b: "PHP",
        c: "Ruby",
        d: "HTML",
        correct: "a",
    },
    {
        question: "What is the purpose of a div tag?",
        a: "To add a line break",
        b: "To create a division or section",
        c: "To insert an image",
        d: "To create a link",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cascading Simple Sheets",
        c: "Computer Style Sheets",
        d: "Creative Style Sheets",
        correct: "a",
    },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const quizForm = document.getElementById("quizForm");

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <h3>${index + 1}. ${item.question}</h3>
            <label><input type="radio" name="question${index}" value="a"> ${item.a}</label><br>
            <label><input type="radio" name="question${index}" value="b"> ${item.b}</label><br>
            <label><input type="radio" name="question${index}" value="c"> ${item.c}</label><br>
            <label><input type="radio" name="question${index}" value="d"> ${item.d}</label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedAnswer = quizForm[`question${index}`].value;
        if (selectedAnswer === item.correct) {
            score++;
        }
    });
    return score;
}

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const score = calculateScore();
    resultContainer.innerHTML = `<h3>You scored ${score} out of ${quizData.length}</h3>`;
});


loadQuiz();
