import { appEl, cardsArray, cardsArrayResult } from '../index.js';
import { difficulty } from './difficulty-page.js';

let cardsCount = null;

export const renderGameBoard = () => {
    if (difficulty === 'easy') {
        cardsCount = 6;

        for (let i = 1; i <= cardsCount; i++) {
            cardsArrayResult.push();
        }

        console.log('Легкий уровень');

        return;
    }
    if (difficulty === 'medium') {
        cardsCount = 12;
        console.log('Средний ровень');
        return;
    } else {
        cardsCount = 18;
        console.log('Сложный ровень', cardsCount);
        return;
    }
};

//Функция рисует разметку с закрытыми картами
export const renderCardsClosed = () => {
    const appHtml = `<div class="container">
        <div class="header-row">
            <div class="header-time">
                <div class="time-text">min</div> 
                <div class="time-text">sek</div> 
                <div class="time-number">00.</div> 
                <div class="time-number">00</div> 
            </div>
            
            <div class="header-button">
                <button class="again" id="again">Начать заново</button>
            </div>
            
            <div class="cards-container">
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
                <div class="closed-card"></div>
            </div>
        </div>
    </div>`;
    appEl.innerHTML = appHtml;
};

//Функция рисует открытые карты с помощью метода map который проходит по массиву cardsArray
export const renderCardsOpen = () => {
    const appHtml = cardsArray
        .map((card) => {
            return `<div class=${card}></div>`;
        })
        .join('');

    const containerHtml = `<div class="container">
    <div class="header-row">
        <div class="header-time">
            <div class="time-text">min</div> 
            <div class="time-text">sek</div> 
            <div class="time-number">00.</div> 
            <div class="time-number">00</div> 
        </div>
        
        <div class="header-button">
            <button class="again" id="again">Начать заново</button>
        </div>
        <div class="cards-container">${appHtml}</div>
    </div>
</div>`;

    appEl.innerHTML = containerHtml;
};

//Функция исходя из сложности уровня рисует 6, 12 или 18 карт и перемешивает их
export const renderCardsGenerator = () => {};
