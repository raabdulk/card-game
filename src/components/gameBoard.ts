import {
    appEl,
    cardsArray,
    cardsArrayResult,
    cardsArrayResult2,
} from '../index';
import { difficulty, renderDifficulty } from './difficultyPage';
import { logicOfGame } from './logicOfGame';
import { forInterval, stopTimerFunc, timerNull, total } from './timerForGame';
let cardsCount: number;

export const renderGameBoard = () => {
    timerNull();
    //условие для легкого уровня
    if (difficulty === 'easy') {
        cardsCount = 3;

        do {
            let addedEl: string =
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
                    <div class="time-text"></div>  
                    <div class="time-text">sek</div> 
                    <div class="time-number interval minutes" id="time-min">00</div>
                    <div class="time-number" id="time-min">.</div>
                    <div class="time-number interval seconds" id="time-sec">00</div>
                </div>
                
                <div class="header-button">
                    <button class="again" id="again">Начать заново</button>
                </div>
                <div class="cards-container">${appHtml}</div>
            </div>
        </div>`;

        if (appEl) {
            appEl.innerHTML = containerHtml;
        }

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };

        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

        //Запускаем таймер
        forInterval;

        //Останавливаем таймер при условии
        stopTimerFunc();

        return;
        //Конец условия для легкого уровня
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
                    <div class="time-text"></div>  
                    <div class="time-text">sek</div> 
                    <div class="time-number interval minutes" id="time-min">00</div>
                    <div class="time-number" id="time-min">.</div>
                    <div class="time-number interval seconds" id="time-sec">00</div>
                </div>
                
                <div class="header-button">
                    <button class="again" id="again">Начать заново</button>
                </div>
                <div class="cards-container">${appHtml}</div>
            </div>
        </div>`;

        if (appEl) {
            appEl.innerHTML = containerHtml;
        }

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };
        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

        //Запускаем таймер
        forInterval;

        //Останавливаем таймер при условии
        stopTimerFunc();

        return;
        //Конец условия для среднего уровня
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
                    <div class="time-text"></div>  
                    <div class="time-text">sek</div> 
                    <div class="time-number interval minutes" id="time-min">00</div>
                    <div class="time-number" id="time-min">.</div>
                    <div class="time-number interval seconds" id="time-sec">00</div>
                </div>
                
                <div class="header-button">
                    <button class="again" id="again">Начать заново</button>
                </div>
                <div class="cards-container">${appHtml}</div>
            </div>
        </div>`;

        if (appEl) {
            appEl.innerHTML = containerHtml;
        }

        // Закрываем карты спустя 5 сек
        let closingCards = () => {
            let newClass = document.querySelectorAll('#card');
            newClass.forEach((clas) => clas.classList.add('closed-card'));
        };
        setTimeout(closingCards, 5000);

        //Логика игры
        logicOfGame();

        //Запускаем таймер
        forInterval;

        //Останавливаем таймер при условии
        stopTimerFunc();

        return;
        //Конец условия для легкого уровня
    }
};

//Функция рисует разметку с закрытыми картами
export const renderCardsClosed = () => {
    const appHtml = `<div class="container">
        <div class="header-row">
            <div class="header-time">
                <div class="time-text">min</div> 
                <div class="time-text">sek</div> 
                <div class="time-number">00.00</div> 
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
    if (appEl) {
        appEl.innerHTML = appHtml;
    }
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
            <div class="time-number" id="time-number">00.00</div> 
        </div>
        
        <div class="header-button">
            <button class="again" id="again">Начать заново</button>
        </div>
        <div class="cards-container">${appHtml}</div>
    </div>
</div>`;

    if (appEl) {
        appEl.innerHTML = containerHtml;
    }
};

export const renderYouWon = () => {
    const appHtml = `<div class="container">
                        <div class="column">
                            <div class="column-icon"><img src="./img/celebration.png" alt="celebration"></div>
                            <div class="column-alert">Вы выиграли!</div>
                            <div class="column-text">Затраченное время:</div>
                            <div class="column-time">${total}</div>
                            <button class="column-button" id="Again">Играть снова</button>
                        </div>
                    </div>`;

    if (appEl) {
        appEl.innerHTML = appHtml;
    }

    let playAgain: HTMLElement | null = document.getElementById('Again');
    if (playAgain) {
        playAgain.addEventListener('click', () => {
            renderDifficulty();
        });
    }
};

export const renderYouLose = () => {
    const appHtml = `<div class="container">
                        <div class="column">
                            <div class="column-icon"><img src="./img/dead.png" alt="celebration"></div>
                            <div class="column-alert">Вы проиграли!</div>
                            <div class="column-text">Затраченное время:</div>
                            <div class="column-time">${total}</div>
                            <button class="column-button" id="Again">Играть снова</button>
                        </div>
                    </div>`;

    if (appEl) {
        appEl.innerHTML = appHtml;
    }

    let playAgain: HTMLElement | null = document.getElementById('Again');
    if (playAgain) {
        playAgain.addEventListener('click', () => {
            renderDifficulty();
        });
    }
};
