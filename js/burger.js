const BURGER = document.querySelector('.nav__burger');
const BURGERLIST = document.querySelector('.nav__burger--list');
const nextElem = document.querySelector('.header__content--btn');
const BODY = document.querySelector('body')
const LIST = document.querySelector('.nav__list')

function activeBurger () {
    BURGERLIST.classList.remove('disactive');
    BURGERLIST.classList.remove('burgetoup');
}
function disactivateOnBlur () {
    BURGERLIST.classList.add('burgetoup');
}

function disactivateOnClick (event) {
    if ((event.target.closest('button') !== BURGER && event.target.closest('div') !== BURGERLIST) || event.target.closest('ul') === LIST) {
        BURGERLIST.classList.add('burgetoup');
    }
}

export function burgerChange() {
        BURGER.addEventListener('focus', activeBurger);
        nextElem.addEventListener('focus', disactivateOnBlur);
        BODY.addEventListener('click', disactivateOnClick);
}
