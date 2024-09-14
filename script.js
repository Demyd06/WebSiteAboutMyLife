function playMusic() {
    const music = document.getElementById('bg-music');
    music.play();  // Музика починає грати після кліку на кнопку
}

function nextPopup(popupId) {
    const currentPopup = document.querySelector('.popup:not(.hidden)');
    currentPopup.classList.add('hidden');
    document.getElementById('popup' + popupId).classList.remove('hidden');
}

function endPopup() {
    alert("Я люблю тебе, Анна! Назавжди разом ❤️");
}
