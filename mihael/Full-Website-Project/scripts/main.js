$(document).ready(function() {


    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));

    $(window).on("scroll", function(){          //when we scroll from top to bottom
      var scrollFromTop = $(window).scrollTop();  //when we past 350px we add class scroll
      $("body").toggleClass("scroll", (scrollFromTop > 350));
    });

      //SMOOTH SCROLL
      $('.menu li a[href^="#"]').on('click', function(e){
          e.preventDefault();

          var target = $(this.hash);

          if (target.length) {
              $('html, body').stop().animate({
                  scrollTop: target.offset().top -60
              }, 1000);
          }

      });

});


    // MASONRY
    $('.grid').masonry({
        //options
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0
    });

     //SLICK SLIDER
     $('.slider').slick({
        autoplay: true,
        autoplaySpeed:1500,
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 3,      //how many slides to see
        fade:false,          //(work only with 1 image),img to fade
        prevArrow:'<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Previous</button>',

        responsive: [
          {
              breakpoint: 990,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
        ]
    });
