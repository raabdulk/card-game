import { howManyCards } from './howManyCard';

{
    //Подготовка
    const value = 'easy';

    //Действия
    const result = howManyCards(value);

    //Сверка
    result === 6 || 12 || 18;
}
