/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "По соображениям совести",
        "Спасатели малибу",
        "Мстители: Финал",
        "Мстители: Война бесконечности"
    ],
    sortMovies() {
        return this.movies.sort();
    },
    sendMoviesName() {
        this.movies.forEach((item, index) => {
            const li = document.createElement('li');

            li.classList.add('promo__interactive-item');

            promoInteractiveList.append(li);


            li.innerHTML = `${index + 1}. ${item}
            <div class="delete"></div>`;
        });
    }
};

const promo = document.querySelector('.promo'),
    promoAdv = promo.querySelector('.promo__adv'),
    img = promoAdv.querySelectorAll('img'),
    promoContent = promo.querySelector('.promo__content'),
    promoBg = promoContent.querySelector('.promo__bg'),
    promoDiv = promoBg.querySelectorAll('div'),
    promoInteractive = document.querySelector('.promo__interactive'),
    promoInteractiveList = promoInteractive.querySelector('.promo__interactive-list'),
    promoInteractiveItem = promoInteractiveList.querySelectorAll('.promo__interactive-item');

img.forEach(item => item.remove());

const div = document.createElement('div');

div.classList.add('promo__genre');
promoBg.prepend(div);

div.innerHTML = 'драма'.toUpperCase();
promoDiv[1].remove();

promoBg.style.backgroundImage = 'url("../project/img/bg.jpg")';

promoInteractiveItem.forEach(item => item.remove());

movieDB.sortMovies();
movieDB.sendMoviesName();