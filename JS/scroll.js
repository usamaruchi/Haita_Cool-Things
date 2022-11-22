gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 2000,
    duration: 10,
    ScrollTrigger: ".square2"
})