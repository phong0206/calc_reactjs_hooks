var photos = $(".photo-list .photo");
var dimmed = $("#dimmed");
var tlDimmed = gsap.timeline({ paused: true });

tlDimmed.to(dimmed, {
  duration: 0.5,
  opacity: 1,
  onStart: function () {
    dimmed.show();
  },
  onReverseComplete: function () {
    dimmed.hide();
  },
});

photos.each(function () {
  var photo = $(this);
  var tlPhoto = gsap.timeline({ paused: true });
  var isZoom = false;

  gsap.set(photo, {
    x: gsap.utils.random(-window.innerWidth / 4, window.innerWidth / 4, 50),
    y: gsap.utils.random(-window.innerHeight / 3, window.innerHeight / 3, 50),
    rotation: gsap.utils.random(-30, 30),
    scale: gsap.utils.random(0.3, 0.4),
  });

  tlPhoto.to(photo, {
    duration: 0.5,
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    onStart: function () {
      photo.css("zIndex", 20);
    },
    onReverseComplete: function () {
      photo.css("zIndex", 1);
    },
  });
  tlPhoto.to(photo.find("span"), {
    duration: 0.3,
    delay: -0.2,
    opacity: 1,
  });

  photo.on("click", function () {
    if (!isZoom) {
      tlPhoto.play();
      tlDimmed.play();
      isZoom = true;
    } else {
      tlPhoto.reverse();
      tlDimmed.reverse();
      isZoom = false;
    }
  });
});
