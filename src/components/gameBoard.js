import { appEl } from '../index.js';

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
                <div class="closed-card">1</div>
                <div class="closed-card">2</div>
                <div class="closed-card">3</div>
                <div class="closed-card">4</div>
                <div class="closed-card">5</div>
                <div class="closed-card">6</div>
                <div class="closed-card">7</div>
                <div class="closed-card">8</div>
                <div class="closed-card">9</div>
                <div class="closed-card">10</div>
                <div class="closed-card">11</div>
                <div class="closed-card">12</div>
                <div class="closed-card">13</div>
                <div class="closed-card">14</div>
                <div class="closed-card">15</div>
                <div class="closed-card">16</div>
                <div class="closed-card">17</div>
                <div class="closed-card">18</div>
                <div class="closed-card">19</div>
                <div class="closed-card">20</div>
                <div class="closed-card">21</div>
                <div class="closed-card">22</div>
                <div class="closed-card">23</div>
                <div class="closed-card">24</div>
                <div class="closed-card">25</div>
                <div class="closed-card">26</div>
                <div class="closed-card">27</div>
                <div class="closed-card">28</div>
                <div class="closed-card">29</div>
                <div class="closed-card">30</div>
                <div class="closed-card">31</div>
                <div class="closed-card">32</div>
                <div class="closed-card">33</div>
                <div class="closed-card">34</div>
                <div class="closed-card">35</div>
                <div class="closed-card">36</div>
            </div>
        </div>
    </div>`;
    appEl.innerHTML = appHtml;
};


export const renderCardsOpen = () => {
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
                <div class="spades-ace"></div>
                <div class="spades-king"></div>
                <div class="spades-queen"></div>
                <div class="spades-jack"></div>
                <div class="spades-10"></div>
                <div class="spades-9"></div>
                <div class="spades-8"></div>
                <div class="spades-7"></div>
                <div class="spades-6"></div>
                <div class="closed-card">10</div>
                <div class="closed-card">11</div>
                <div class="closed-card">12</div>
                <div class="closed-card">13</div>
                <div class="closed-card">14</div>
                <div class="closed-card">15</div>
                <div class="closed-card">16</div>
                <div class="closed-card">17</div>
                <div class="closed-card">18</div>
                <div class="closed-card">19</div>
                <div class="closed-card">20</div>
                <div class="closed-card">21</div>
                <div class="closed-card">22</div>
                <div class="closed-card">23</div>
                <div class="closed-card">24</div>
                <div class="closed-card">25</div>
                <div class="closed-card">26</div>
                <div class="closed-card">27</div>
                <div class="closed-card">28</div>
                <div class="closed-card">29</div>
                <div class="closed-card">30</div>
                <div class="closed-card">31</div>
                <div class="closed-card">32</div>
                <div class="closed-card">33</div>
                <div class="closed-card">34</div>
                <div class="closed-card">35</div>
                <div class="closed-card">36</div>
            </div>
        </div>
    </div>`;

    appEl.innerHTML = appHtml;
};