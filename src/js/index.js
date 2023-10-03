import mobileNav from './modules/mobile-nav.js';
mobileNav();

//Мобильное меню---------------------

const mobileMenuLinks = document.querySelectorAll('.mobile-nav__link');

mobileMenuLinks.forEach(function (mobileMenuLink) {
	mobileMenuLink.addEventListener('click', mobileActive);
});

function mobileActive(evt) {
	const target = evt.currentTarget;

	mobileMenuLinks.forEach(function (mobileMenuLink) {
		mobileMenuLink.classList.remove('mobile-nav__link--active');
	});
	target.classList.add('mobile-nav__link--active');
}

//Мобильное меню---------------------


//Основное меню---------------------

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function (menuLink) {
	menuLink.addEventListener('click', active);
});

function active(e) {
	const target = e.currentTarget;

	menuLinks.forEach(function (menuLink) {
		menuLink.classList.remove('menu__link--active');
	});
	target.classList.add('menu__link--active');
}

//Основное меню---------------------

