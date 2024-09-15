// Відтворення музики
function playMusic() {
    const music = document.getElementById('bg-music');
    music.play().then(() => {
        console.log("Музика почала грати");
    }).catch(error => {
        console.log("Помилка при відтворенні музики: ", error);
    });
}

// Перемикання між спливаючими вікнами
function nextPopup(popupId) {
    const currentPopup = document.querySelector('.popup:not(.hidden)');
    currentPopup.classList.add('hidden');
    document.getElementById('popup' + popupId).classList.remove('hidden');
}

// Підсумковий екран
function endPopup() {
    alert("Ви ЗАЙШЛИ прямісенько в Серце, дивіться не розбийте Шановна ❤️");
    // Закриття вікна і повернення до основної сторінки
    document.querySelector('.container').style.display = 'none';
    document.getElementById("timeline").classList.remove("hidden");
    document.getElementById("timeline").style.display = "block";

    // Зупинка попередньої музики
    const oldMusic = document.getElementById('bg-music'); // Ідентифікатор попередньої музики
    if (oldMusic) {
        oldMusic.pause();
        oldMusic.currentTime = 0; // Повернути трек на початок
    }

    // Відтворення нової музики
    const music = document.getElementById('new-music');
    music.play().then(() => {
        console.log("Музика почала грати");
    }).catch(error => {
        console.log("Помилка при відтворенні музики: ", error);
    });
}


// Вікторина
function submitQuiz() {
    // Отримуємо значення з полів вводу
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q4').value;
    const q6 = document.getElementById('q4').value;

    // Перевірка
    if (q1 && q2 && q3 && q4 && q5 && q6) {
        showCustomAlert("Кохана ти відповіла на всі запитання. Дякую!❣❣");
        nextPopup(3); // Переходимо до наступного спливаючого вікна
    } else {
        showCustomAlert("Будь ласка кохана, дай відповідь на все! Люблю тебе❣❣");
    }
}


// Показати кастомне повідомлення
function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertBox.classList.remove('hidden');
}

// Закрити кастомне повідомлення
function closeCustomAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.classList.add('hidden');
}
