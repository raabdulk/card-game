let opened = false;
let firstCard, secondCard;

//Открываем карту и присваиваем карте класс
const flipCard = (e) => {
    const target = e.target;

    target.classList.remove('closed-card');
    if (!opened) {
        //Первый клик
        opened = true;
        firstCard = e.srcElement.className;
    } else {
        //Второй клик
        opened = false;
        secondCard = e.srcElement.className;

        //Сравниваем
        comparison();
    }
};

//Функция сравнения
const comparison = () => {
    if (firstCard === secondCard) {
        alert('Вы победили!');
    } else {
        alert('Вы проиграли');
    }
};

//Навешиваем обработчик кликов на элементы с id='card'
export const logicOfGame = () => {
    let cards = document.querySelectorAll('#card');
    cards.forEach((card) => {
        card.addEventListener('click', flipCard);
    });
};
