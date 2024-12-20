$(document).ready(function () {
  // ! Trending Tours slider
  if ($(".js-trendingTours").length) {
    $(".js-trendingTours").owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 4,
        },
      },
    });
  }

  // ! Testimonial slider
  if ($(".js-testimonials").length) {
    $(".js-testimonials").owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      margin: 42,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        920: {
          items: 3,
        },
      },
    });
  }

  // ! Gallery slider
  if ($(".js-gallerySlider").length) {
    $(".js-gallerySlider").owlCarousel({
      items: 5,
      nav: true,
      dots: false,
      margin: 24,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 4,
        },
        960: {
          items: 5,
        },
      },
    });
  }

  // ! Partner Slider
  if ($(".partnerSlider").length) {
    $(".partnerSlider").owlCarousel({
      items: 8,
      dots: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        420: {
          items: 2,
        },
        560: {
          items: 3,
        },
        768: {
          items: 4,
        },
        960: {
          items: 6,
        },
        1024: {
          items: 8,
        },
      },
    });
  }

  // ! Blog slider
  if ($(".js-blogSlider").length) {
    $(".js-blogSlider").owlCarousel({
      items: 2,
      nav: true,
      dots: false,
      margin: 48,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });
  }

  // Partner Slider
  if ($(".js-ctaSlider").length) {
    $(".js-ctaSlider").owlCarousel({
      items: 1,
      dots: true,
    });
  }

  // --- Slick slider call
  if ($(".banner-slider-02").length) {
    $(".banner-slider-02").owlCarousel({
      items: 1,
      dots: true,
      autoplay: true,
      smartSpeed: 800, // Duration of the transition
      easing: "easeInOutQuad", // Custom easing function for jQuery Easing
      animateOut: "fadeOut", // Fade out animation
      animateIn: "fadeIn",
    });
  }

  if ($(".subMenus").length) {
    $(".subMenus").hover(function () {
      $(".dropdown-toggle", this).trigger("click");
    });
  }

  // ! Gallery image grid
  if ($(".imageGrid").length) {
    $(".imageGrid").masonry({
      // Options
      itemSelector: ".imageGrid-item",
      columnWidth: ".imageGrid-item",
      percentPosition: true,
      gutter: 30,
    });
  }

  // Select 2
  $(".js-advanceSelect").select2();
});
