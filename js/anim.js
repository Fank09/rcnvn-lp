
gsap.registerPlugin(ScrollTrigger) 

gsap.to(".box1", {
  scrollTrigger: ".box1",
  x: 500,
  duration: 3,
});