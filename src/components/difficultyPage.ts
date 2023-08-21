import { appEl } from '../index';
import { renderGameBoard } from './gameBoard';
export let difficulty: string;

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

    if (appEl) {
        appEl.innerHTML = appHtml;
    }

    const levels = ['easy', 'medium', 'hard'];

    // Перебираем уровни
    levels.forEach((level) => {
        let el: HTMLElement | null = document.getElementById(level); // Создаем переменную, которая будет хранить в себе элемент с id уровня
        // Навешиваем на него универсальный обработчик события

        if (el) {
            el.addEventListener('click', () => {
                if (el) {
                    el.classList.add('selected');
                    difficulty = level;
                    console.log(difficulty);
                }
            });
        }
    });

    let startButton: HTMLElement | null = document.getElementById('Start');
    if (startButton) {
        startButton.addEventListener('click', () => {
            renderGameBoard();
        });
    }
};

export const renderPlayGround = () => {
    // Функция рисует игровое поле

    const appHtml = `
        <p class="level-text">Игровое поле</p>
        `;
    if (appEl) {
        appEl.innerHTML = appHtml;
    }
};
