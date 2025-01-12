// Обработчик события для кнопки открытия поп-апа
document.getElementById('infoButton').addEventListener('click', () => {
    const infoPopup = document.getElementById('infoPopup');
    infoPopup.style.display = 'flex';
    hideImages(); // Скрываем изображения при открытии поп-апа
});

// Обработчик события для кнопки закрытия поп-апа
document.getElementById('closePopup').addEventListener('click', () => {
    const infoPopup = document.getElementById('infoPopup');
    infoPopup.style.display = 'none';
    showImages(); // Показываем изображения при закрытии поп-апа
});

// Закрытие поп-апа при клике вне его
window.addEventListener('click', (event) => {
    const popup = document.getElementById('infoPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
        showImages(); // Показываем изображения при закрытии поп-апа
    }
});

// Функция для скрытия изображений
function hideImages() {
    const images = document.querySelectorAll('.product-card'); // Замените .image-class на класс ваших изображений
    images.forEach(image => {
        image.style.display = 'none'; // Скрываем изображения
    });
}

// Функция для показа изображений
function showImages() {
    const images = document.querySelectorAll('.product-card'); // Замените .image-class на класс ваших изображений
    images.forEach(image => {
        image.style.display = 'block'; // Показываем изображения
    });
}
