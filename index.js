export const globalState = null;
export const difficulty = null;

const appEl = document.getElementById("app"); // константа с элементом app в который рендерится приложение

export const renderApp = () => {

    const appHtml = `<div class="container">
        <div class="level">
            <p class="level-text">Выбери сложность</p>
            <div class="level-numbers">
                <div class="level-numbers-box" id="easy">1</div>
                <div class="level-numbers-box" id="medium">2</div>
                <div class="level-numbers-box" id="hard">3</div>
            </div>
            <button class="level-button" id="Start">Старт</button>
        </div>
    </div>`;

    appEl.innerHTML = appHtml;

    const easy = document.getElementById("easy");
    const medium = document.getElementById("medium");
    const hard = document.getElementById("hard");

    easy.addEventListener("click", () => {
        easy.classList.add('selected');
        console.log('easy');
    })

    medium.addEventListener("click", () => {
        medium.classList.add('selected');
        console.log('medium')
    })

    hard.addEventListener("click", () => {
        hard.classList.add('selected');
        console.log('hard')
    })
}

renderApp();

