// База даних з питаннями (англійською мовою)
const quizData = [
    {
        question: "Which is the largest continent on Earth by both area and population?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest and deepest on our planet?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which continent is completely covered by ice and has no permanent residents?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Australia", correct: false },
            { text: "South America", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Which ocean is located mostly in the Southern Hemisphere and surrounds Antarctica?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world, often called the 'island continent'?",
        answers: [
            { text: "Europe", correct: false },
            { text: "South America", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false }
        ]
    }
];

// Змінні стану гри
let currentQuestionIndex = 0;
let score = 0;

// Отримуємо доступ до елементів HTML
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const progressElement = document.getElementById('progress');
const questionElement = document.getElementById('question-text');
const answersBlock = document.getElementById('answers-block');
const nextButton = document.getElementById('next-button');
const scoreTextElement = document.getElementById('score-text');
const restartButton = document.getElementById('restart-button');

// Функція старту
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove('hide');
    resultsScreen.classList.add('hide');
    showQuestion();
}

// Показуємо питання
function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    
    progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener('click', selectAnswer);
        answersBlock.appendChild(button);
    });
}

// Очищення блоку відповідей
function resetState() {
    nextButton.style.display = 'none';
    while (answersBlock.firstChild) {
        answersBlock.removeChild(answersBlock.firstChild);
    }
}

// Обробка вибору користувача
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    // Блокуємо інші кнопки та підсвічуємо правильну
    Array.from(answersBlock.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'inline-block';
}

// Логіка для кнопки "Next"
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// Показ фінальних результатів
function showResults() {
    quizScreen.classList.add('hide');
    resultsScreen.classList.remove('hide');
    scoreTextElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}

// Кнопка перезапуску
restartButton.addEventListener('click', startQuiz);

// Запуск при завантаженні файлу
startQuiz();
