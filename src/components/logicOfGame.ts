let opened = false;
let firstCard, secondCard;
let boardLocked = false;
let classSelector;

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
    if (firstCard.classList.value == secondCard.classList.value) {
        alert('Победа');
    } else {
        boardLocked = true;
        setTimeout(() => {
            firstCard.classList.add('closed-card');
            secondCard.classList.add('closed-card');
            boardLocked = false;
            classSelector = document.querySelectorAll('closed-card');
            console.log('classSelector:', classSelector);
        }, 1000);
    }
};

//Навешиваем обработчик кликов на элементы с id='card'
export const logicOfGame = () => {
    let cards = document.querySelectorAll('#card');
    cards.forEach((card) => {
        card.addEventListener('click', flipCard);
    });
};
