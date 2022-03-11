/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки
"Подтвердить" - новый фильм добавляется в список. Страница не должна
перезагружаться. Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как
input.value;
P.s. Здесь есть несколько вариантов решения, принимается любой, но рабочий. 

2) Если название фильма больше, чем -  21 символ обрезать его и добавить 
три точки

3) При клике на мусорную корзину элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
    // Мой вариант
    // sortMovies() {
    //     return this.movies.sort();
    // },
    // sendMoviesName() {
    //     this.movies.forEach((item, index) => {
    //         const li = document.createElement('li');

    //         li.classList.add('promo__interactive-item');

    //         promoInteractiveList.append(li);

    //         li.innerHTML = `${index + 1}. ${item}
    //         <div class="delete"></div>`;
    //     });
    // }
};

// const promo = document.querySelector('.promo'),
//     promoAdv = promo.querySelector('.promo__adv'),
//     img = promoAdv.querySelectorAll('img'),
//     promoContent = promo.querySelector('.promo__content'),
//     promoBg = promoContent.querySelector('.promo__bg'),
//     promoDiv = promoBg.querySelectorAll('div'),
//     promoInteractive = document.querySelector('.promo__interactive'),
//     promoInteractiveList = promoInteractive.querySelector('.promo__interactive-list'),
//     promoInteractiveItem = promoInteractiveList.querySelectorAll('.promo__interactive-item');

// img.forEach(item => item.remove());

// const div = document.createElement('div');

// div.classList.add('promo__genre');
// promoBg.prepend(div);

// div.innerHTML = 'драма'.toUpperCase();
// promoDiv[1].remove();

// promoBg.style.backgroundImage = 'url("../project/img/bg.jpg")';

// promoInteractiveItem.forEach(item => item.remove());

// movieDB.sortMovies();
// movieDB.sendMoviesName();

// Решение
const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

const button = document.querySelector('button'),
    inputAdding = document.querySelector('.adding__input'),
    inputAll = document.querySelectorAll('input');

inputAll[2].classList.add('input__check');

const inputCheck = document.querySelector('.input__check');


// Добавляем любимый фильм
let i = 0;

const deleteInputCheck = (e) => {
    console.log('Добавляем любимый фильм');

    console.log(e.target);
    i++;
    if (i == 1) {
        inputCheck.removeEventListener('click', deleteInputCheck);
    }
};

inputCheck.addEventListener('click', deleteInputCheck);

// Удаление всех рекламмных блоков
adv.forEach(item => {
    item.remove();
});

// Изменение жанра
genre.textContent = 'драма';

// Изменение заднего фона сайта
poster.style.backgroundImage = 'url("img/bg.jpg")';

// Пустые кавычки можно использовать для очистки элементов 
// Очистка элемента
movieList.innerHTML = '';

// Сортировка названий фильмов
movieDB.movies.sort();

// console.log(poster.innerHTML);

// Срез строки
const sliceStr = (str) => {
    if (str.length > 21) {
        return str.slice(0, 21) + '...';
    } else {
        return str;
    }
};

// Показать фильмы с базы
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${sliceStr(film)}
            <div class="delete"></div>
        </li>
    `;
});

// Очистка списка
movieList.innerHTML = '';

// Очистка массива
movieDB.movies.length = 0;
console.log(movieDB);

// Добавление просмотренних фильмов через форму
const addValue = (event) => {
    // console.log(event);
    event.preventDefault();

    if (inputAdding.value != '') {
        movieDB.movies.push(inputAdding.value);

        // let findIndex = movieDB.movies.indexOf(inputAdding.value);

        movieDB.movies.sort();
        console.log(movieDB.movies);
        console.log(inputAdding.value);

        // movieDB.movies.length = 0;
        movieList.innerHTML = '';

        // Показать фильмы с базы
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${sliceStr(film)}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    // Удаление фильма из списка
    const deleteElem = movieList.querySelectorAll('.delete');

    const deleteElement = (e) => {
        console.log(e.target);
        e.target.parentElement.remove();
    };

    deleteElem.forEach(item => {
        item.addEventListener('click', deleteElement);
    });
};

button.addEventListener('click', addValue);