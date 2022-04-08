//navigation
const body = document.querySelector('body');
const closeMobileNavIcon = document.querySelector('#close-mobile-nav-icon');
const openMobileNavIcon = document.querySelector('#open-mobile-nav-icon');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavBtn = document.querySelector('#open-mobile-nav');
const headerNavLink = document.querySelectorAll('.header__nav-link');

function openNav() {
	body.classList.add('body--mobile-nav-open');
	openMobileNavIcon.classList.remove('is-visible');
	closeMobileNavIcon.classList.add('is-visible');
	mobileNav.classList.add('is-visible');
	mobileNav.classList.add('is-faded-in');
}

function closeNav() {
	openMobileNavIcon.classList.add('is-visible');
	closeMobileNavIcon.classList.remove('is-visible');
	mobileNav.classList.remove('is-faded-in');
	setTimeout(function(){
		body.classList.remove('body--mobile-nav-open');
		mobileNav.classList.remove('is-visible');
	}, 400);
}

mobileNavBtn.addEventListener('click', (e) => {
	if (openMobileNavIcon.classList.contains('is-visible')) {
		openNav();
	} else {
		closeNav();
	}
});

headerNavLink.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		closeNav();
		const href = e.target.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;
		const html = document.querySelector('html, body');
		console.log(`href: ${href} offsetTop: ${offsetTop}`);
		// $('html, body').animate({ scrollTop: offsetTop }, 400);
		// html.animate({ scrollTop: offsetTop }, 400);
		gsap.to(window, {duration: 0.4, scrollTo:href});
	});
});

// headerNavLink.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	closeNav();
// 	const href = $(this).attr('href');
// 	console.log(href);
// 	$('html, body').animate({ scrollTop: $(href).offset().top }, 400);
// });