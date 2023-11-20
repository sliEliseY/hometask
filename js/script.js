let menuItems = document.getElementsByClassName('menu-item'),
  menu = document.querySelector('.menu'),
  adv = document.getElementsByClassName('adv')[0],
  column = document.querySelector('.column'),
  title = document.querySelector('#title'),
  feedBack = document.querySelector('#prompt');

// 1. Сделать порядок в меню, и добавить пятый пункт
let div = document.createElement('div');

div.classList.add('menu-item');
div.textContent = 'Пятый пункт';
menu.appendChild(div);
menu.insertBefore(menuItems[2], menuItems[1]);

// 2. заменить фон странички
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// 3. изменить заголовок - добавить слово "подлинную"
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// 4. удалить рекламу со страници
  adv.remove();

// 5. Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let item = prompt('Какое твоё отношение к Apple?', '');

if (typeof (item) == 'string' && item !== '' && typeof (item) !== null) {
  feedBack.innerHTML = item;
} else {
  feedBack.innerHTML = "Ошибка в введении отзыва";
}