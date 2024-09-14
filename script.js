function playMusic() {
    const music = document.getElementById('bg-music');
    music.play().then(() => {
        console.log("Музика почала грати");
    }).catch(error => {
        console.log("Помилка при відтворенні музики: ", error);
    });
}


function nextPopup(popupId) {
    const currentPopup = document.querySelector('.popup:not(.hidden)');
    currentPopup.classList.add('hidden');
    document.getElementById('popup' + popupId).classList.remove('hidden');
}

function endPopup() {
    alert("Я люблю тебе, Анна! Назавжди разом ❤️");
}
