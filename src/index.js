import { renderCardsClosed } from './components/gameBoard.js';
import { renderCardsOpen } from './components/gameBoard.js';
import { renderDifficulty } from './components/difficulty-page.js';
export let globalState = null;


export const appEl = document.getElementById('app'); // константа с элементом app в который рендерится приложение



renderCardsOpen();
