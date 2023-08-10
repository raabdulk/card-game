import { appEl, cardsArray, cardsArrayResult } from '../index.js';

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
    const appHtml = cardsArray.map((card, index) => {
        return `<div class=${card}></div>`;
    }).join('');

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
