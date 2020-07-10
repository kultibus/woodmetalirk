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


function ibg() {
let ibg = document.querySelectorAll(".ibg");
	for (i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage =
			'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx