// База даних: 15 географічних питань про материки та океани
const quizData = [
    {
        question: "Який материк є найбільшим на Землі як за площею, так і за кількістю населення?",
        answers: [
            { text: "Африка", correct: false },
            { text: "Євразія", correct: true },
            { text: "Північна Америка", correct: false },
            { text: "Антарктида", correct: false }
        ]
    },
    {
        question: "Який океан є найбільшим і найглибшим на нашій планеті?",
        answers: [
            { text: "Атлантичний океан", correct: false },
            { text: "Індійський океан", correct: false },
            { text: "Тихий океан", correct: true },
            { text: "Північний Льодовитий океан", correct: false }
        ]
    },
    {
        question: "Який материк повністю вкритий кригою і не має постійного населення?",
        answers: [
            { text: "Антарктида", correct: true },
            { text: "Австралія", correct: false },
            { text: "Південна Америка", correct: false },
            { text: "Європа", correct: false }
        ]
    },
    {
        question: "Який океан омиває Антарктиду і розташований переважно в Південній півкулі?",
        answers: [
            { text: "Індійський океан", correct: false },
            { text: "Південний океан", correct: true },
            { text: "Атлантичний океан", correct: false },
            { text: "Північний Льодовитий океан", correct: false }
        ]
    },
    {
        question: "Який материк є найменшим у світі і його часто називають «материком-островом»?",
        answers: [
            { text: "Європа", correct: false },
            { text: "Південна Америка", correct: false },
            { text: "Австралія", correct: true },
            { text: "Африка", correct: false }
        ]
    },
    {
        question: "Який океан розділяє Америку та Європу з Африкою?",
        answers: [
            { text: "Тихий океан", correct: false },
            { text: "Атлантичний океан", correct: true },
            { text: "Індійський океан", correct: false },
            { text: "Північний Льодовитий океан", correct: false }
        ]
    },
    {
        question: "На якому материку розташована пустеля Сахара — найбільша спекотна пустеля світу?",
        answers: [
            { text: "Азія", correct: false },
            { text: "Австралія", correct: false },
            { text: "Африка", correct: true },
            { text: "Північна Америка", correct: false }
        ]
    },
    {
        question: "До якого материка належать такі країни, як Канада, США та Мексика?",
        answers: [
            { text: "Південна Америка", correct: false },
            { text: "Європа", correct: false },
            { text: "Азія", correct: false },
            { text: "Північна Америка", correct: true }
        ]
    },
    {
        question: "Який океан є найменшим і наймілкішим у світі?",
        answers: [
            { text: "Північний Льодовитий океан", correct: true },
            { text: "Індійський океан", correct: false },
            { text: "Південний океан", correct: false },
            { text: "Атлантичний океан", correct: false }
        ]
    },
    {
        question: "На якому материку розкинулися тропічні ліси Амазонії, які називають «легенями планети»?",
        answers: [
            { text: "Африка", correct: false },
            { text: "Південна Америка", correct: true },
            { text: "Азія", correct: false },
            { text: "Австралія", correct: false }
        ]
    },
    {
        question: "Яка частина світу (або материк) вважається колискою західної цивілізації та містить Францію та Італію?",
        answers: [
            { text: "Європа", correct: true },
            { text: "Азія", correct: false },
            { text: "Північна Америка", correct: false },
            { text: "Африка", correct: false }
        ]
    },
    {
        question: "Який океан обмежений Азією на півночі, Австралією на сході та Африкою на заході?",
        answers: [
            { text: "Атлантичний океан", correct: false },
            { text: "Тихий океан", correct: false },
            { text: "Індійський океан", correct: true },
            { text: "Південний ocean", correct: false }
        ]
    },
    {
        question: "Який материк унікальний тим, що на ньому розташована лише одна держава?",
        answers: [
            { text: "Антарктида", correct: false },
            { text: "Австралія", correct: true },
            { text: "Європа", correct: false },
            { text: "Південна Америка", correct: false }
        ]
    },
    {
        question: "У якому океані розташована Маріанська западина — найглибша точка на Землі?",
        answers: [
            { text: "Атлантичний океан", correct: false },
            { text: "Індійський океан", correct: false },
            { text: "Тихий океан", correct: true },
            { text: "Північний Льодовитий океан", correct: false }
        ]
    },
    {
        question: "Яка уявна лінія ділить Землю на Північну та Південну півкулі?",
        answers: [
            { text: "Гринвіцький меридіан", correct: false },
            { text: "Екватор", correct: true },
            { text: "Тропік Рака", correct: false },
            { text: "Тропік Козерога", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const progressElement = document.getElementById('progress');
const questionElement = document.getElementById('question-text');
const answersBlock = document.getElementById('answers-block');
const nextButton = document.getElementById('next-button');
const scoreTextElement = document.getElementById('score-text');
const feedbackElement = document.getElementById('feedback-msg');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove('hide');
    resultsScreen.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    
    progressElement.innerText = `Запитання ${currentQuestionIndex + 1} з ${quizData.length}`;
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

function resetState() {
    nextButton.style.display = 'none';
    while (answersBlock.firstChild) {
        answersBlock.removeChild(answersBlock.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    // Блокуємо вибір та підсвічуємо правильну відповідь
    Array.from(answersBlock.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizScreen.classList.add('hide');
    resultsScreen.classList.remove('hide');
    scoreTextElement.innerText = `Твій результат: ${score} з ${quizData.length}!`;
    
    // Результати та фідбек українською мовою
    if (score === quizData.length) {
        feedbackElement.innerText = "Ідеально! Ти справжній знавець географії! 🌍🏆";
    } else if (score >= 10) {
        feedbackElement.innerText = "Чудова робота! Дуже солідні знання! 🗺️✨";
    } else if (score >= 5) {
        feedbackElement.innerText = "Непогано, але ти можеш краще. Спробуй ще раз! 🧭";
    } else {
        feedbackElement.innerText = "Треба ще потренуватися! Успіх приходить до наполегливих. 🌊";
    }
}

restartButton.addEventListener('click', startQuiz);

// Запуск гри
startQuiz();
