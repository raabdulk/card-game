import { appEl } from '../index.js';
import { renderGameBoard } from './gameBoard.js';
export let difficulty = null;

export const renderDifficulty = () => {
    // Стартовая страница с выбором сложности и кнопкой Старт
    const appHtml = `<div class="container">
    <div class="level">
        <p class="level-text">Выбери сложность</p>
        <div class="level-numbers">
            <input type="radio" id="easy" name="1">
            <label for="easy" class="level-numbers-box">1</label>

            <input type="radio" id="medium" name="1">
            <label for="medium" class="level-numbers-box">2</label>

            <input type="radio" id="hard" name="1">
            <label for="hard" class="level-numbers-box">3</label>

        </div>
        <button class="level-button" id="Start">Старт</button>
    </div>

</div>`;

    appEl.innerHTML = appHtml;

    const levels = ['easy', 'medium', 'hard'];

    // Перебираем уровни
    levels.forEach((uroven) => {
        const el = document.getElementById(uroven); // Создаем переменную, которая будет хранить в себе элемент с id уровня
        // Навешиваем на него универсальный обработчик события
        el.addEventListener('click', () => {
            el.classList.add('selected');
            difficulty = uroven;
            console.log(difficulty);
        });
    });

    const startButton = document.getElementById('Start');
    startButton.addEventListener('click', () => {
        renderGameBoard();
    });
};

export const renderPlayGround = () => {
    // Функция рисует игровое поле

    const appHtml = `
        <p class="level-text">Игровое поле</p>
        `;
    appEl.innerHTML = appHtml;
};
