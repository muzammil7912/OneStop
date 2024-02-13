var Swipes = new Swiper(".swiper-container", {
    speed: 500,
    effect: "fade",
    grabCursor: false,
    slidesPerView: "auto",
  
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var Swipes = new Swiper(".swiper-container2", {
    speed: 500,
    effect: "slide",
    grabCursor: false,
  //   allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: "auto",
  
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var Swipes2 = new Swiper(".section7__bottomswiper", {
    //   loop:true,
    spaceBetween: 40,
        speed: 500,
      slidesPerView: 3,
      grabCursor: false,
      autoplay: {
          delay:5000,
          disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".section7r",
        prevEl: ".section7l",
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 40
        },
        979: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        }
    }
    });


    $(".yartcategories__top li a").click(function(e) {
      e.preventDefault()
      $(".yartcategories__top li a").removeClass("active");
      $(this).addClass("active");
    })

    $(".yartcarrental2__top li").click(function(e) {
      e.preventDefault()
      $(".yartcarrental2__top li").removeClass("active");
      $(this).addClass("active");
    })
    $(".liens").click(function(e) {
      e.preventDefault();
      $(this).toggleClass("active")
      $(".modalBlack").toggleClass("active")
      $(".header__left nav").toggleClass("active")
    })
    $(".header__left .close").click(function(e) {
      e.preventDefault();
      $(".modalBlack").removeClass("active")
      $(".header__left nav").removeClass("active")
    })
      $(".modalBlack").click(function(e) {
        e.preventDefault();
        $(".modalBlack").removeClass("active")
        $(".header__left nav").removeClass("active")
      })



      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('go-top');
            // $('.logo_side').addClass('hide');
            // $('.logo_side_2').removeClass('hide');
        } else {
            $('.header').removeClass('go-top');
            // $('.logo_side').removeClass('hide');
            // $('.logo_side_2').addClass('hide');
          }
        });


        $(".sortbtn").click(function (e) {
          e.preventDefault();
          $(".sortbtn").removeClass("active");
          $(this).addClass("active");
        });

        $(".carrentalfleet__leftBox-top span").click(function () {
          $(this).toggleClass("active");
          if ($(this).hasClass("active")) {
            $(this)
              .parent(".carrentalfleet__leftBox-top").next().css("maxHeight",$(this).parent(".carrentalfleet__leftBox-top").next().get(0).scrollHeight);
          } else {
            $(this).parent(".carrentalfleet__leftBox-top").next().css("maxHeight", 0);
          }
        });


        var swiper3 = new Swiper(".mySwiper", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var swiper4 = new Swiper(".mySwiper2", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: swiper3,
          },
        });