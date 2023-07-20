gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//navigation
const body = document.querySelector("body");
const closeMobileNavIcon = document.querySelector("#close-mobile-nav-icon");
const openMobileNavIcon = document.querySelector("#open-mobile-nav-icon");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavBtn = document.querySelector("#open-mobile-nav");
const headerNavLink = document.querySelectorAll(
  ".header__nav-link, .header__mob-nav-link"
);

function openNav() {
  body.classList.add("body--mobile-nav-open");
  openMobileNavIcon.classList.remove("is-visible");
  closeMobileNavIcon.classList.add("is-visible");
  mobileNav.classList.add("is-visible");
  mobileNav.classList.add("is-faded-in");
}

function closeNav() {
  openMobileNavIcon.classList.add("is-visible");
  closeMobileNavIcon.classList.remove("is-visible");
  mobileNav.classList.remove("is-faded-in");
  setTimeout(function () {
    body.classList.remove("body--mobile-nav-open");
    mobileNav.classList.remove("is-visible");
  }, 400);
}

mobileNavBtn.addEventListener("click", (e) => {
  if (openMobileNavIcon.classList.contains("is-visible")) {
    openNav();
  } else {
    closeNav();
  }
});

headerNavLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    closeNav();
    const href = e.target.getAttribute("href");
    gsap.to(window, { duration: 0.4, scrollTo: href });
  });
});

//close mobile nav when window is resized to desktop width
const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleTabletChange(e) {
  if (e.matches) {
    closeNav();
  }
}

mediaQuery.addEventListener("change", handleTabletChange);
handleTabletChange(mediaQuery);

//About section: Text animation
let aboutTl = gsap
  .timeline()
  .fromTo(
    ".section--about__name span:not(.sr-only)",
    { y: 15 },
    { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.075 }
  )
  .to(
    ".section--about__title",
    { duration: 1, autoAlpha: 1, ease: Power2.easeOut },
    "-=0.75"
  )
  .fromTo(
    ".section--about__border",
    { width: 0 },
    { duration: 1.25, autoAlpha: 1, width: "100%", ease: Power2.easeOut },
    "-=1"
  )
  .fromTo(
    ".section--about__p",
    { y: 15 },
    { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.1 },
    "-=1"
  );

//About section: parallax effect
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  gsap.to(".section--about__text-container", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".section--about",
      markers: false,
      start: "top 0%",
      scrub: true,
    },
  });
});

//Work section: header animation
let workTl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section--about",
      start: "top 0%",
    },
  })
  .fromTo(
    ".section--work__header-group span",
    { y: 15 },
    { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.075 }
  )
  .fromTo(
    ".section--work__border",
    { width: 0 },
    { duration: 1.25, autoAlpha: 1, width: "100%", ease: Power2.easeOut },
    "-=1"
  );

//Work section: fade in text elements
const fadeInElements = gsap.utils.toArray(
  ".section--work__h3, .section--work__title, .section--work__list, .section--work__a"
);
fadeInElements.forEach((elem) => {
  gsap.from(elem, {
    duration: 1,
    y: 15,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
    },
  });
});

//Work section: rotate in image elements
const fadeInImg = gsap.utils.toArray(".section--work__img-container");
fadeInImg.forEach((elem) => {
  gsap.from(elem, {
    duration: 1,
    // autoAlpha: 0,
    rotationY: "15deg",
    scrollTrigger: {
      // markers: true,
      trigger: elem,
      start: "top 75%",
    },
  });
});

//Experience section: header animation
let expTl = gsap
  .timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".section--experience",
      start: "top 75%",
    },
  })
  .fromTo(
    ".section--experience__header span",
    { y: 15 },
    { duration: 1, autoAlpha: 1, y: 0, ease: Power2.easeOut, stagger: 0.075 }
  )
  .fromTo(
    ".section--experience__border",
    { width: 0 },
    { duration: 1.25, autoAlpha: 1, width: "100%", ease: Power2.easeOut },
    "-=1"
  );
