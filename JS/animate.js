var tl = new TimelineMax({
    paused:true
  });

  tl.fromTo(".animateText", 6, {
    width: "0",
  }, {
    width: "7.5em",
    ease:  SteppedEase.config(37)
  }, 0);

  tl.fromTo(".animateText", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 0);
  
  tl.play();
  