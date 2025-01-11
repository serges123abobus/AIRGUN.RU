document.getElementById('infoButton').addEventListener('click', function() {
    document.getElementById('infoPopup').style.display = 'flex';
    hideImages(); // Скрываем изображения при открытии поп-апа
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('infoPopup').style.display = 'none';
    showImages(); // Показываем изображения при закрытии поп-апа
});

// Закрытие поп-апа при клике вне его
window.onclick = function(event) {
    const popup = document.getElementById('infoPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
        showImages(); // Показываем изображения при закрытии поп-апа
    }
};

function hideImages() {
    const images = document.querySelectorAll('.product-card'); // Замените .image-class на класс ваших изображений
    images.forEach(image => {
        image.style.display = 'none'; // Скрываем изображения
    });
}
document.getElementById('shopButton').addEventListener('click', function() {
    window.location.href = 'pravila.html';
});