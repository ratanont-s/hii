$(function() {
  // Header
  $("header").sticky({
    topSpacing: 0
  });
  if (window.innerWidth < 992) {
    $("header").unstick();
    $("header").addClass("sticky-top");
  }
  // Sec 1 slide
  $("#sec1 .slide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false
  });
  // Sec 2 slide
  $("#sec2 .slide").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // Sec 4 slide
  $("#sec4 .slick").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });
  //   Sec 7 slide
  $("#sec7 .slick").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
