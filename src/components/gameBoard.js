import {
    appEl,
    cardsArray,
    cardsArrayResult,
    cardsArrayResult2,
} from '../index.js';
import { difficulty } from './difficulty-page.js';
import { logicOfGame } from './logicOfGame.js';

let cardsCount = null;

export const renderGameBoard = () => {
    //условие для легкого уровня
    if (difficulty === 'easy') {
        cardsCount = 3;

        do {
            let addedEl =
                cardsArray[Math.floor(Math.random() * cardsArray.length)];

            if (cardsArrayResult.includes(addedEl)) {
                console.log('Ничего');
            } else {
                cardsArrayResult.push(addedEl);
            }
        } while (cardsArrayResult.length !== cardsCount);

        cardsArrayResult2.push(...cardsArrayResult);
        cardsArrayResult.push(...cardsArrayResult2);

        let cardsArrayResultResult = cardsArrayResult.sort(
            () => Math.random() - 0.5,
        );

        const appHtml = cardsArrayResultResult
            .map((card) => {
                return `<div class=${card} id='card'></div>`;
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

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };
        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

        return;
    }
    //условие для среднего уровня
    if (difficulty === 'medium') {
        cardsCount = 6;

        do {
            let addedEl =
                cardsArray[Math.floor(Math.random() * cardsArray.length)];

            if (cardsArrayResult.includes(addedEl)) {
                console.log('Ничего');
            } else {
                cardsArrayResult.push(addedEl);
            }
        } while (cardsArrayResult.length !== cardsCount);

        cardsArrayResult2.push(...cardsArrayResult);
        cardsArrayResult.push(...cardsArrayResult2);

        let cardsArrayResultResult = cardsArrayResult.sort(
            () => Math.random() - 0.5,
        );

        const appHtml = cardsArrayResultResult
            .map((card) => {
                return `<div class=${card} id='card'></div>`;
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

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };
        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

        return;
    }
    // условие для сложного уровня
    else {
        cardsCount = 9;

        do {
            let addedEl =
                cardsArray[Math.floor(Math.random() * cardsArray.length)];

            if (cardsArrayResult.includes(addedEl)) {
                console.log('Ничего');
            } else {
                cardsArrayResult.push(addedEl);
            }
        } while (cardsArrayResult.length !== cardsCount);
        console.log(cardsArrayResult.length);

        cardsArrayResult2.push(...cardsArrayResult);
        cardsArrayResult.push(...cardsArrayResult2);

        let cardsArrayResultResult = cardsArrayResult.sort(
            () => Math.random() - 0.5,
        );

        const appHtml = cardsArrayResultResult
            .map((card) => {
                return `<div class=${card} id='card'></div>`;
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

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };
        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

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
