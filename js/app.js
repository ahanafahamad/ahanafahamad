gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
}

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}
ScrollTrigger.create({
  trigger: "body",
  start: "top -100px",
  end: 99999,
  toggleClass: {
    targets: "header",
    className: "scrolled",
  },
});

const typed = new Typed("#home > .container h3 span", {
  strings: ["Web Developer", "Programmer", "Web Designer", ""],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 50,
  loop: true,
});
const type = new Typed("#typed-text", {
  strings: ["Web Developer", "Programmer", "Web Designer", ""],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 50,
  loop: true,
});
gsap.from("main #about", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    start: "top 80%",
    trigger: "#about",
  },
});
gsap.from("main #projects", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    start: "top 80%",
    trigger: "#projects",
  },
});
gsap.from("main #experience", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    start: "top 80%",
    trigger: "#experience",
  },
});
gsap.from("main #contact", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    start: "top 80%",
    trigger: "#contact",
  },
});
gsap.from("footer", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  duration: 1.5,
  delay: 0.5,
  scrollTrigger: {
    start: "top 80%",
    trigger: "footer",
  },
});
