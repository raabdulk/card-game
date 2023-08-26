// описываем работу таймера в игре

import { stopTimer } from './logicOfGame';

export let minutes: number = 0;
export let seconds: number = 0;
export let total: any = 0;

//Таймер игры
export const startTimer = () => {
    const minutesBlock = document.querySelector('.minutes');
    const secondsBlock = document.querySelector('.seconds');

    seconds++;
    if (secondsBlock) {
        secondsBlock.textContent = '0' + String(seconds);
    }

    if (seconds > 9 && secondsBlock) {
        secondsBlock.textContent = String(seconds);
    }

    if (seconds > 59) {
        minutes++;
        if (minutesBlock) {
            minutesBlock.textContent = '0' + minutes;
        }
        seconds = 0;
    }

    if (minutes > 9) {
        if (minutesBlock) {
            minutesBlock.textContent = String(minutes);
        }
    }

    if (minutesBlock && secondsBlock) {
        total = minutesBlock.textContent + `.` + secondsBlock.textContent;
    }

    stopTimerFunc();
};

//Запускаем таймер каждую 1 сек и кладем интервал в переменную
export let forInterval = () => {
    setInterval(startTimer, 1000);
};

//Функция для остановки интервала
export let stopInterval = ({ forInterval }) => {
    clearInterval(forInterval);
};

//Если переменная stopTimer = true то запускаем функцию остановки интервала
export let stopTimerFunc = () => {
    if (stopTimer) {
        stopInterval({ forInterval });
    }
};

//Обнуление таймера
export const timerNull = () => {
    minutes = 0;
    seconds = 0;
    total = 0;
};
