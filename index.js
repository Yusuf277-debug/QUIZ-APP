[1:30 PM, 8/3/2026] Ummuh Baasit: // ======================================
// QUIZ QUESTIONS - GENERAL KNOWLEDGE
// ======================================

const questions = [
    {
        question: "What is the capital city of Nigeria?",
        answers: [
            { text: "Lagos", correct: false },
            { text: "Abuja", correct: true },
            { text: "Kano", correct: false },
            { text: "Ibadan", correct: false }
        ]
    },

    {
        question: "How many continents are there in the world?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },

    {
        question: "What is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },

    {
        question: "How many days are there in a leap year?",
        answers: [
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "364", correct: false },
            { text: "367", correct: false }
        ]
    },

    {
        question: "Which animal is known as the largest land animal?",
        answers: [
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: true },
            { text: "Rhinoceros", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },

    {
        question: "Who was the first person to walk on the Moon?",
        answers: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    }
];


// ======================================
// GET HTML ELEMENTS
// ======================================

const questionElement =
    document.getElementById("question-body");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-btn");

const questionNumber =
    document.getElementById("questionNumber");

const scoreElement =
    document.getElementById("score");

const quizElement =
    document.getElementById("quiz");

const resultElement =
    document.getElementById("result");

const finalScore =
    document.getElementById("final-score");

const restartButton =
    document.getElementById("restart-btn");


// ======================================
// QUIZ VARIABLES
// ======================================

let currentQuestionIndex = 0;

let score = 0;

let answerSelected = false;


// ======================================
// START QUIZ
// ======================================

function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    answerSelected = false;

    scoreElement.textContent = "Score: 0";

    quizElement.classList.remove("hidden");

    resultElement.classList.add("hidden");

    nextButton.style.display = "none";

    showQuestion();
}


// ======================================
// SHOW QUESTION
// ======================================

function showQuestion() {

    resetState();

    const currentQuestion =
        questions[currentQuestionIndex];

    questionElement.textContent =
        currentQuestion.question;

    questionNumber.textContent =
  …
[1:34 PM, 8/3/2026] Ummuh Baasit: A responsive car website designed to help users explore different cars, view their features, specifications, and prices, and easily find vehicles that match their preferences.