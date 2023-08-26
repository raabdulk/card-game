import { guessedCards, cardsArrayResult, arreysNull } from '../index';
import { renderYouLose, renderYouWon } from './gameBoard';
import { stopInterval, forInterval } from './timerForGame';
import { timerNull } from './timerForGame';

let opened = false;
let firstCard, secondCard;
let boardLocked = false;
let classSelector;
export let stopTimer: boolean = false;

//Открываем карту и присваиваем карте класс
const flipCard = (e) => {
    if (boardLocked) return;

    const target = e.target;

    if (target === firstCard) return;
    console.log(target);

    target.classList.remove('closed-card');
    if (!opened) {
        //Первый клик
        opened = true;
        firstCard = target;
    } else {
        //Второй клик
        opened = false;
        secondCard = target;

        //Сравниваем
        comparison();
    }
};

//Функция сравнения
const comparison = () => {
    if (firstCard.classList.value === secondCard.classList.value) {
        alert('Победа');
        pushGuessedCards();
    } else {
        boardLocked = true;
        setTimeout(() => {
            firstCard.classList.add('closed-card');
            secondCard.classList.add('closed-card');
            boardLocked = false;
            classSelector = document.querySelectorAll('closed-card');
        }, 1000);
        renderYouLose();
        arreysNull();
    }
};

//Навешиваем обработчик кликов на элементы с id='card'
export const logicOfGame = () => {
    let cards = document.querySelectorAll('#card');
    cards.forEach((card) => {
        card.addEventListener('click', flipCard);
    });
};

//Заполнение массива отгаданных карт
const pushGuessedCards = () => {
    guessedCards.push(firstCard.classList.value);
    guessedCards.push(secondCard.classList.value);
    console.log('Массив отгаданных карт:', guessedCards);

    if (cardsArrayResult.length === guessedCards.length) {
        console.log('Запускаем уведомление');
        stopInterval({ forInterval });
        renderYouWon();
        stopTimer = true;
        arreysNull();
    }
};
