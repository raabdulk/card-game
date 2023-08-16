let open = false;
let success = false;

export const logicOfGame = () => {
    console.log('Работает логика');
    let cardLogic = document.getElementById('card');
    cardLogic.addEventListener('click', () => {
        console.log('Меня нажали');
        if (open === false && success === false) {
            cardLogic.classList.remove('closed-card');
            open = true;
        }
    });
};
