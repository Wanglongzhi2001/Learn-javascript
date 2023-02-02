const data = [
{
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
    { answer: "swordfish", isCorrect: true },
    { answer: "jellyfish", isCorrect: false },
    { answer: "starfish", isCorrect: false },
    { answer: "crayfish", isCorrect: false },
    ],
},
{
    id: 2,
    question: "A flutter is a group of:",
    answers: [
    { answer: "bees", isCorrect: false },
    { answer: "penguins", isCorrect: false },
    { answer: "butterflies", isCorrect: true },
    { answer: "camels", isCorrect: false },
    ],
},
{
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
    { answer: "bats", isCorrect: false },
    { answer: "vultures", isCorrect: true },
    { answer: "ants", isCorrect: false },
    ],
},
];


const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0; // 问题编号
let correctCount = 0; // 正确答案编号
let wrongCount = 0; // 错误答案编号
let total = 0;
let selectedAnswer; // 选中答案的编号

const showQuestion = (qNumber) =>{
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
    `
    <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
    </div>
    `
    )
}

showQuestion(qIndex)