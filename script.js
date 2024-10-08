$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });


// Scroll-triggered animation
$(window).on('scroll', function() {
    var skillsOffset = $('#skills').offset().top;
    var windowScroll = $(window).scrollTop();

    if (windowScroll > skillsOffset - window.innerHeight / 1.5) {
        // Trigger the animations for linear bars
        createLinearBar('#skill-html', 0.9);
        createLinearBar('#skill-css', 0.85);
        createLinearBar('#skill-js', 0.8);

        // Trigger the animations for circular bars
        createCircleProgress('#circle-html', 0.9);
        createCircleProgress('#circle-css', 0.85);
        createCircleProgress('#circle-js', 0.8);
    }
});

    
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Computer Science Student",
        "Python Developer",
        "Web designer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Computer Science Student",
        "Python Developer",
        "Web designer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });

