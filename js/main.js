const servicesTitles = document.querySelectorAll('.services-header__titles');
const servicesTexts = document.querySelectorAll('.services-header__text');

// SERVICES SECTION
const clearActiveTexts = () => {
	servicesTexts.forEach((text) => text.classList.remove('active'));
	servicesTitles.forEach((title) => title.classList.remove('active'));
};

servicesTitles.forEach((title, indexTitle) => {
	title.addEventListener('click', () => {
		clearActiveTexts();
		title.classList.add('active');
		servicesTexts.forEach((text, indexText) => {
			if (indexTitle === indexText) {
				text.classList.add('active');
			}
		});
	});
});
// SERVICES SECTION - END
// REVIEWS SECTION
const nextRevBtn = document.querySelector('.nextRev');
const prevRevBtn = document.querySelector('.prevRev');
const reviews = document.querySelectorAll('.review');
let currSlide = 0;

reviews.forEach((item, indexItem) => {
	item.style.left = `${indexItem * 100}%`;
});

const updateReview = () => {
	reviews.forEach((slide) => {
		slide.style.transform = `translateX(-${currSlide * 100}%)`;
	});
};

const nextReview = () => {
	clearInterval(carouselEngine);
	if (currSlide === reviews.length - 1) {
	} else {
		currSlide++;
		updateReview();
	}
};
const prevReview = () => {
	clearInterval(carouselEngine);
	if (currSlide === 0) {
	} else {
		currSlide--;
		updateReview();
	}
};

const carouselEngine = () => {
	setInterval(() => {
		currSlide++;
		if (currSlide > reviews.length - 1) {
			currSlide = 0;
			updateReview();
		} else {
			updateReview();
		}
	}, 3000);
};
carouselEngine();
nextRevBtn.addEventListener('click', nextReview);
prevRevBtn.addEventListener('click', prevReview);

// FOOTER
const footerYear = (document.querySelector('.footer-year').textContent = `${new Date().getFullYear()}`);

// MENU
const nav = document.querySelector('.nav');
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		nav.classList.add('expand');
		scrollTopBtn.classList.add('active');
	} else {
		nav.classList.remove('expand');
		scrollTopBtn.classList.remove('active');
	}
});

// MENU MOBILE
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelectorAll('.nav-links__item');
let isOpen = false;

const menuEngine = () => {
	if (!isOpen) {
		navBtn.classList.add('active');
		nav.classList.add('open');
		document.body.style.overflow = 'hidden';
		isOpen = true;
	} else {
		navBtn.classList.remove('active');
		nav.classList.remove('open');
		document.body.style.overflow = 'visible';
		isOpen = false;
	}
};

navBtn.addEventListener('click', menuEngine);
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuEngine();
		document.body.style.overflow = 'visible';
	});
});
