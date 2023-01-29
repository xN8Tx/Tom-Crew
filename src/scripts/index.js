'use strict';
import LocomotiveScroll from 'locomotive-scroll';

window.addEventListener('DOMContentLoaded', function() {

    const   burgerMenu   = document.querySelector('.header__nav'),
            header = document.querySelector('.header');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        header.classList.toggle('active');
        document.body.classList.toggle('lock')
    });

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});