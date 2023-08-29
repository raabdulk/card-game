export const howManyCards = (difficulty) => {
    let cardsArray;
    if (difficulty === 'easy') {
        cardsArray = 6;
        return cardsArray;
    }
    if (difficulty === 'medium') {
        cardsArray = 12;
        return cardsArray;
    }
    if (difficulty === 'hard') {
        cardsArray = 18;
        return cardsArray;
    } else {
        alert('Введите: easy, medium или hard');
    }
};
