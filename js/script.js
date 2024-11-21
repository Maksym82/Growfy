"use strict"

document.addEventListener('click', documentClick);


function documentClick(e) {
    const targetItem = e.target;
    console.log(targetItem);
    if(targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    } else if (targetItem.closest('.menu__link')) {
        document.documentElement.classList.toggle('menu-open');
    }
}

