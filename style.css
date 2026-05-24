document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Яка тварина є найбільшим синім китом?",
            answers: [
                "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=300&auto=format&fit=crop", // Кит
                "https://images.unsplash.com/photo-1560275669-46c5a88d6a4c?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559151813-8be342f55b1b?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Знайдіть зображення Великого бар'єрного рифу:",
            answers: [
                "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Який із цих кораблів є сучасним океанічним лайнером?",
            answers: [
                "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=300&auto=format&fit=crop", // Лайнер
                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Хто з цих істот є небезпечною білою акулою?",
            answers: [
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560275669-46c5a88d6a4c?q=80&w=300&auto=format&fit=crop", // Акула
                "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Знайдіть глибоководний батискаф для досліджень океану:",
            answers: [
                "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=300&auto=format&fit=crop",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lK7G7279rB0S8YfOfA_ZtE_fN3SAn2U4xA&s", // Батискаф
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "На якому фото зображено шторм та величезні хвилі цунамі?",
            answers: [
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1482867996988-2faec3cbb4f9?q=80&w=300&auto=format&fit=crop", // Шторм
                "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Знайдіть морську тварину — косатку (орку):",
            answers: [
                "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1570473541596-2654ed0ec3a1?q=80&w=300&auto=format&fit=crop", // Косатка
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Яке з цих зображень показує полярний айсберг в океані?",
            answers: [
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=300&auto=format&fit=crop", // Айсберг
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Знайдіть типового мешканця дна — морську зірку:",
            answers: [
                "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=300&auto=format&fit=crop", // Зірка
                "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Який із цих приладів є магнітним морським компасом?",
            answers: [
                "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=300&auto=format&fit=crop", // Компас
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        },
        {
            question: "Знайдіть зображення гігантського восьминога:",
            answers: [
                "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=300&auto=format&fit=crop", // Восьминіг
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559151813-8be342f55b1b?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Де тут зображено класичний піщаний безлюдний атол?",
            answers: [
                "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=300&auto=format&fit=crop", // Атол
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 0,
            isImageQuiz: true
        },
        {
            question: "Виберіть фото з прозорою водою тропічного лагунного моря:",
            answers: [
                "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop", // Тропіки
                "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 2,
            isImageQuiz: true
        },
        {
            question: "Знайдіть зображення морського маяка на скелі:",
            answers: [
                "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1513553404607-988bf2703777?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=300&auto=format&fit=crop" // Маяк (скелястий краєвид/елемент)
            ],
            correct: 3,
            isImageQuiz: true
        },
        {
            question: "Яка з цих істот є тендітним морським коником?",
            answers: [
                "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=300&auto=format&fit=crop",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XgY8YwR6p6O7m6H4o6p_g6u8X6p8g6u8Xg&s", // Морський коник
                "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=300&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?q=80&w=300&auto=format&fit=crop"
            ],
            correct: 1,
            isImageQuiz: true
        }
    ];

    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    const timerDisplay = document.querySelector('#timer');
    const scoreDisplay = document.querySelector('#score-display');
    const finalScoreDisplay = document.querySelector('#final-score');

    let questionIndex = 0;
    let score = 0;
    let timer = 25; // Таймер на 25 секунд
    let interval;

    function showQuestion(question) {
        clearInterval(interval);
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;

        question.answers.forEach((answer, i) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');

            if (question.isImageQuiz) {
                const img = document.createElement('img');
                img.src = answer;
                button.appendChild(img);
                button.appendChild(img);
                button.classList.add('image-option');
            } else {
                button.innerText = answer;
            }

            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);
        });
    }

    function checkAnswer(button, i) {
        clearInterval(interval);
        const correct = questions[questionIndex].correct;
        
        if (i === correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
            const allButtons = document.querySelectorAll('.answer-btn');
            allButtons[correct].classList.add('correct');
        }

        document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
        setTimeout(nextQuestion, 1500);
    }

    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }

    function showResult() {
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const accuracy = Math.round((score / questions.length) * 100);
        
        let message = "";
        if (accuracy === 100) message = "Ідеально! Ти справжній Володар Океанів!";
        else if (accuracy >= 70) message = "Чудовий результат, капітане!";
        else if (accuracy >= 40) message = "Непогано, але шторм трохи збив тебе з курсу.";
        else message = "Спробуй ще раз, море любить наполегливих!";

        resultText.innerText = `Точність: ${accuracy}% \n ${message}`;
        finalScoreDisplay.innerText = score;
    }

    function startTimer() {
        timer = 25; // Скидання на 25 секунд
        timerDisplay.innerText = `Час: ${timer}`;
        scoreDisplay.innerText = `Бали: ${score}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', startGame);

    // Падаючі краплі води на фоні
    function createDrop() {
        const container = document.getElementById('water-container');
        const drop = document.createElement('div');
        
        const items = ['💧', '🌊', '💦'];
        drop.innerText = items[Math.floor(Math.random() * items.length)];
        drop.classList.add('drop');
        
        drop.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 3 + 4; // 4-7 секунд
        drop.style.animationDuration = duration + 's';
        
        drop.style.fontSize = Math.random() * 15 + 18 + 'px';

        container.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, duration * 1000);
    }

    setInterval(createDrop, 400);
});
