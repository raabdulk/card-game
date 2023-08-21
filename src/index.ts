// import { renderCardsClosed } from './components/gameBoard.js';
// import { renderCardsOpen } from './components/gameBoard.js';
import { renderDifficulty } from './components/difficultyPage';
import './style.css';
export let globalState = null;

export const appEl = document.getElementById('app'); // константа с элементом app в который рендерится приложение

// Массив мастей и значений карт (36 карт)
export const cardsArray: string[] = [
    'spades-ace',
    'spades-king',
    'spades-queen',
    'spades-jack',
    'spades-10',
    'spades-9',
    'spades-8',
    'spades-7',
    'spades-6',

    'hearts-ace',
    'hearts-king',
    'hearts-queen',
    'hearts-jack',
    'hearts-10',
    'hearts-9',
    'hearts-8',
    'hearts-7',
    'hearts-6',

    'diamonds-ace',
    'diamonds-king',
    'diamonds-queen',
    'diamonds-jack',
    'diamonds-10',
    'diamonds-9',
    'diamonds-8',
    'diamonds-7',
    'diamonds-6',

    'clubs-ace',
    'clubs-king',
    'clubs-queen',
    'clubs-jack',
    'clubs-10',
    'clubs-9',
    'clubs-8',
    'clubs-7',
    'clubs-6',
];

// Массив мастей и значений карт без пар
export const cardsArrayResult: string[] = [];

// Массив мастей и значений карт с парами
export const cardsArrayResult2: string[] = [];

renderDifficulty();
