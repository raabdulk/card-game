const { it } = require('@jest/globals');
import { howManyCards } from './howManyCard';

it('should check the number of cards', () => {
    //Подготовка
    const value = 'easy';

    //Действия
    const result = howManyCards(value);

    //Сверка
    result === 6 || 12 || 18;
});
