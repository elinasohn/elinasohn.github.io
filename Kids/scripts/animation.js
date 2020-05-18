gsap.to(".site-name", {repeat: -1, duration: 8, ease: "none", backgroundPosition: "200% center"});

/***********************/

gsap.set(".talkbubble", {autoAlpha: 1, xPercent:-100})

var $page = $('.talkbubble'),
    $button = $('.animal-first');

$button.on('mouseenter', function(e) {
  var $thisPage = $(this).attr('id');
  console.log($thisPage);

  gsap.to($thisPage, 0.8, {xPercent:0, ease: Sine.easeInOut});
});

$button.on('mouseleave', function(e) {
  gsap.to($page, 0.4, {xPercent:-100, ease: Power2.easeIn});
});

