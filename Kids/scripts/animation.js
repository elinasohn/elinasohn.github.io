gsap.to(".site-name", {repeat: -1, duration: 8, ease: "none", backgroundPosition: "200% center"});

/***********************/

gsap.from("#bear", {duration: 2, y:-150, ease: "bounce", });
gsap.from("#deer", {duration: 2, y:-150, ease: "bounce", });

/***********************/

var t = TweenLite.to(".rabbit", 1, {x:490, display:'block', paused:true, reversed:true});

function toggle() {
  
  t.reversed() ? t.play() : t.reverse();
  
}