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
git init
git add .
git commit -m "Добавлен эффект анимации текста с сердцем"
git branch -M main
git remote add origin https://github.com/Roman95687/546464.git
git push -u origin main
