// описываем работу таймера в игре

let totalTime: number;
let minutes: number = 0;
let seconds: number = 0;

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
};
