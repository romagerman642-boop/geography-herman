// Масив з питаннями квізу
const quizData = [
    {
        question: "Який океан є найбільшим та найглибшим на Землі?",
        options: ["Атлантичний", "Індійський", "Тихий", "Північний Льодовитий"],
        correct: 2 // Індекс правильної відповіді (Тихий)
    },
    {
        question: "Яке море є найсолонішим у світі?",
        options: ["Чорне море", "Червоне море", "Середземне море", "Балтійське море"],
        correct: 1 // Індекс правильної відповіді (Червоне)
    },
    {
        question: "Як називається найглибша точка світового океану?",
        options: ["Гренландська западина", "Зондський жолоб", "Пуерто-Рико", "Маріанська западина"],
        correct: 3 // Індекс правильної відповіді (Маріанська)
    },
    {
        question: "Яка тварина є найбільшим мешканцем океанів (і всієї планети)?",
        options: ["Синій кит", "Китова акула", "Кашалот", "Гігантський кальмар"],
        correct: 0 // Індекс правильної відповіді (Синій кит)
    },
    {
        question: "Яке море не має берегів і обмежене лише океанічними течіями?",
        options: ["Карибське море", "Саргасове море", "Японське море", "Тасманове море"],
        correct: 1 // Індекс правильної відповіді (Саргасове)
    }
];

// Пошук HTML елементів
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const progressElement = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

// Функція запуску або скидання квізу
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

// Функція виведення поточного питання на екран
function loadQuestion() {
    // Очищаємо старі варіанти відповідей
    optionsContainer.innerHTML = "";

    // Оновлюємо смугу прогресу
    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressElement.style.width = `${progressPercent}%`;

    // Отримуємо поточне питання
    const currentQuiz = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuiz.question;

    // Створюємо кнопки для кожного варіанту відповіді
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        // Прив'язуємо подію кліку
        button.addEventListener("click", () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

// Функція обробки вибору користувача
function selectAnswer(selectedIndex) {
    const currentQuiz = quizData[currentQuestionIndex];

    // Якщо відповідь правильна, додаємо бал
    if (selectedIndex === currentQuiz.correct) {
        score++;
    }

    // Переходимо до наступного питання
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Функція відображення фінального результату
function showResults() {
    // Оновлюємо прогрес до 100% наприкінці
    progressElement.style.width = "100%";
    
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = quizData.length;
}

// Слухач для кнопки "Пройти знову"
restartBtn.addEventListener("click", startQuiz);

// Перший запуск квізу при завантаженні сторінки
startQuiz();
