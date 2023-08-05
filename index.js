export let globalState = null;
export let difficulty = null;

const appEl = document.getElementById("app"); // константа с элементом app в который рендерится приложение

export const renderApp = () => { // Стартовая страница с выбором сложности и кнопкой Старт

    const appHtml = `<div class="container">
    <div class="level">
        <p class="level-text">Выбери сложность</p>
        <div class="level-numbers">

            <input type="radio" id="easy" name="level">
            <label for="easy" class="level-numbers-box">1</label>

            <input type="radio" id="medium" name="level">
            <label for="medium" class="level-numbers-box">2</label>

            <input type="radio" id="hard" name="level">
            <label for="hard" class="level-numbers-box">3</label>

        </div>
        <button class="level-button" id="Start">Старт</button>
    </div>

</div>`;

    appEl.innerHTML = appHtml;

    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");
    const startButton = document.getElementById("Start");


    easy.addEventListener("click", () => {
        easy.classList.add('selected');
        difficulty = 'easy';
        console.log(difficulty);
    })

    medium.addEventListener("click", () => {
        medium.classList.add('selected');
        difficulty = 'medium';
        console.log(difficulty);
    })

    hard.addEventListener("click", () => {
        hard.classList.add('selected');
        difficulty = 'hard';
        console.log(difficulty);
    })

    startButton.addEventListener("click", () => {
        console.log("Поехали")
        renderPlayGround();
    })
}

export const renderPlayGround = () => { // Функция рисует игровое поле

    const appHtml = `
        <p class="level-text">Игровое поле</p>
        `;
    appEl.innerHTML = appHtml;

}

renderApp();