gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// gsap.to(".header__title", {
// 	duration: 0.2, autoAlpha: 1, ease: "linear",
// 	scrollTrigger: {
// 		trigger: ".section--about",
// 		// markers: true,
// 		start: "bottom 0%", //when top passes 75% viewport height
// 		//events: onEnter onLeave onEnterBack onLeaveBack
// 		toggleActions: "play none reverse none"
// 		//options: play, pause, resume, reset, restart, complete, reverse,none
// 	}
// })

//GSAP tweens
let aboutTl = gsap.timeline();

aboutTl
	.fromTo('.section--about__name span:not(.sr-only)', { y: 15 }, { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.05 })
	.fromTo('.section--about__title', { y: 10 }, { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut }, '-=1')
	.fromTo('.section--about__border', { width: 0 }, { duration: 1.25, autoAlpha: 1, width: '100%', ease: Power2.easeOut }, '-=1.25')
	.fromTo('.section--about__p', { y: 15 }, { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.1 }, '-=0.5');
  
//navigation
const body = document.querySelector('body');
const closeMobileNavIcon = document.querySelector('#close-mobile-nav-icon');
const openMobileNavIcon = document.querySelector('#open-mobile-nav-icon');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavBtn = document.querySelector('#open-mobile-nav');
const headerNavLink = document.querySelectorAll('.header__nav-link, .header__mob-nav-link');

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
		gsap.to(window, {duration: 0.4, scrollTo:href});
	});
});

//close mobile nav when window is resized to desktop width
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleTabletChange(e) {
	if (e.matches) {
		closeNav();
	}
}

mediaQuery.addEventListener('change', handleTabletChange);
handleTabletChange(mediaQuery);

