document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".text");
    const heart = document.querySelector(".heart");

    setTimeout(() => {
        text.classList.add("shrink"); // Запуск анимации сжатия
    }, 500);

    setTimeout(() => {
        heart.classList.add("show-heart"); // Показываем сердце
    }, 1500);
});
