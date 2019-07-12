$(function() {
  // Header
  $("#header-landing").sticky({
    topSpacing: 0
  });
  if (window.innerWidth < 1200) {
    $("#header-landing").unstick();
    $("#header-landing").addClass("sticky-top");
  }
  // Sec 1 slide
  $("#sec1 .slick").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false
  });
  // Sec 2 slide
  $("#sec2 .slick").slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    prevArrow:
      "<a href='#'><img src='../assets/images/icons/prev-arrow.png' /></a>",
    nextArrow:
      "<a href='#'><img src='../assets/images/icons/next-arrow.png' /></a>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  // Sec 4 slide
  $("#sec4 .slick").slick({
    arrows: false,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    pauseOnHover: false,
    appendDots: $("#sec4 #slickDots"),
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

  $(".close").click(function() {
    $("iframe").attr("src", $("iframe").attr("src"));
  });
});
