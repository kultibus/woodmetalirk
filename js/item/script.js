let burger = document.querySelector('.header__burger');
let link = document.querySelectorAll('.header__link');
burger.onclick = toggleActiveLockClasses;
for (let i = 0; i < link.length; i++) {
	link[i].onclick = toggleActiveLockClasses;
}

function toggleActiveLockClasses() {
	let body = document.querySelector('body');
	let headerBody = document.querySelector('.header__body');
	let menu = document.querySelector('.header__menu');
	if (burger.className === 'header__burger') {
		burger.className = 'header__burger active';
	} else {
		burger.className = 'header__burger';
	}
	if (body.className === '') {
		body.className = 'lock';
	} else {
		body.className = '';
	}
	if (headerBody.className === 'header__body') {
		headerBody.className = 'header__body active';
	} else {
		headerBody.className = 'header__body';
	}
	if (menu.className === 'header__menu') {
		menu.className = 'header__menu active';
	} else {
		menu.className = 'header__menu';
	}
}

let image = document.querySelector('.gallery__image');
let slides = document.querySelectorAll('.gallery__item');
let index = 0;
function showSlides(n) {
	for (let i = 0; i < slides.length; i++) {
			if (n < 0) {index = slides.length - 1}
			if (n > slides.length - 1) {index = 0}
			slides[i].className = slides[i].className.replace(' active', '');
		}	
	image.style.backgroundImage = 
	'url("' + slides[index].querySelector('img').getAttribute('src') + '")';
	slides[index].className += ' active';
}
showSlides(index);
for (let i = 0; i < slides.length; i++) {
	slides[i].onclick = function() {
		showSlides(index = i)
	};
}
let arrowLeft = document.querySelector('.arrow__left');
arrowLeft.onclick = function () {
	showSlides(--index);
};
let arrowRight = document.querySelector('.arrow__right');
arrowRight.onclick = function () {
	showSlides(++index);
};

let inputLength = document.getElementById('input__lenght');
let inputWidth = document.getElementById('input__width');
let inputHeight = document.getElementById('input__height');
let inputProfile = document.getElementById('input__profile');
inputLength.oninput = calculate; 
inputWidth.oninput = calculate; 
inputHeight.oninput = calculate; 
inputProfile.oninput = calculate; 
function calculate() {
	let result = Number(inputLength.value) + Number(inputWidth.value) +
	Number(inputHeight.value) + Number(inputProfile.value);
	document.querySelector('.output__text').innerHTML =
	result;
}






// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx