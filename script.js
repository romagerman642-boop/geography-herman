// База даних: 15 питань про моря та океани
const quizData = [
    { question: "Який океан є найбільшим та найглибшим на Землі?", options: ["Атлантичний", "Індійський", "Тихий", "Північний Льодовитий"], correct: 2 },
    { question: "Яке море є найсолонішим у світі?", options: ["Чорне море", "Червоне море", "Середземне море", "Балтійське море"], correct: 1 },
    { question: "Як називається найглибша точка світового океану?", options: ["Гренландська западина", "Зондський жолоб", "Пуерто-Рико", "Маріанська западина"], correct: 3 },
    { question: "Яка тварина є найбільшим мешканцем океанів і всієї планети?", options: ["Синій кит", "Китова акула", "Кашалот", "Гігантський кальмар"], correct: 0 },
    { question: "Яке море не має сухопутних берегів і обмежене лише течіями?", options: ["Карибське море", "Саргасове море", "Японське море", "Тасманове море"], correct: 1 },
    { question: "Яка середня глибина Світового океану приблизно?", options: ["Близько 1200 м", "Близько 2500 м", "Близько 3700 м", "Близько 5000 м"], correct: 2 },
    { question: "Яка велика океанічна течія зігріває клімат Європи?", options: ["Гольфстрім", "Куросіо", "Перуанська течія", "Лабрадорська течія"], correct: 0 },
    { question: "Який океан є наймолодшим за часом утворення?", options: ["Тихий", "Атлантичний", "Індійський", "Північний Льодовитий"], correct: 1 },
    { question: "Через яку протоку з'єднуються Середземне море та Атлантичний океан?", options: ["Босфор", "Гібралтарська протока", "Берингова протока", "Магелланова протока"], correct: 1 },
    { question: "Яке море є наймілкішим на планеті?", options: ["Азовське море", "Мармурове море", "Червоне море", "Карибське море"], correct: 0 },
    { question: "Який відсоток поверхні Землі вкритий океанами й морями?", options: ["Близько 50%", "Близько 61%", "Близько 71%", "Близько 85%"], correct: 2 },
    { question: "Як називається найбільша структура, створена живими організмами в океані?", options: ["Маріанський риф", "Великий Бар'єрний риф", "Атол Мальдів", "Бермудський трикутник"], correct: 1 },
    { question: "Який океан повністю розташований лише в Північній півкулі?", options: ["Індійський", "Північний Льодовитий", "Атлантичний", "Південний"], correct: 1 },
    { question: "Яке явище викликає регулярні підйоми та опускання рівня води в океані?", options: ["Цунамі", "Підводні землетруси", "Припливи і відпливи (вплив Місяця)", "Океанічні вихори"], correct: 2 },
    { question: "Який колір світла проникає найглибше в океанську воду?", options: ["Червоний", "Жовтий", "Зелений", "Синій"], correct: 3 }
];

// HTML елементи екранів
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// HTML елементи інтерфейсу
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const progressElement = document.getElementById("progress");
const counterElement = document.getElementById("question-counter");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const resultComment = document.getElementById("result-comment");

// Кнопки
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 25;

// Слухачі для кнопок меню
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    // Очищення попереднього стану
    optionsContainer.innerHTML = "";
    clearInterval(timerInterval);
    timeLeft = 25;
    updateTimerDisplay();

    // Оновлення прогресу текстом та смугою
    counterElement.innerText = `Питання ${currentQuestionIndex + 1} з ${quizData.length}`;
    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressElement.style.width = `${progressPercent}%`;

    // Виведення тексту питання
    const currentQuiz = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuiz.question;

    // Створення варіантів відповідей
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });

    // Запуск таймера
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Якщо час вийшов — автоматичний перехід далі (відповідь не зараховано)
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerElement.innerText = timeLeft;
    
    // Якщо залишилося менше 7 секунд, вмикаємо червону пульсацію
    if (timeLeft <= 6) {
        timerElement.classList.add("timer-warning");
    } else {
        timerElement.classList.remove("timer-warning");
    }
}

function selectAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const currentQuiz = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuiz.correct) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timerInterval);
    progressElement.style.width = "100%";
    
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = quizData.length;

    // Розумний фінальний коментар залежно від результату
    if (score === quizData.length) {
        resultComment.innerText = "Неймовірно! Ти справжній Посейдон, знаєш океан до найдрібніших деталей! 🌊";
    } else if (score >= 10) {
        resultComment.innerText = "Чудовий результат! Океанські глибини майже підкорилися тобі. 🚢";
    } else if (score >= 5) {
        resultComment.innerText = "Непогано, але попереду ще багато невідкритих таємниць та островів! 🧭";
    } else {
        resultComment.innerText = "Схоже, твій корабель потрапив у невеликий шторм. Спробуй ще раз освіжити знання! 🧭";
    }
}
