$(document).ready(function() {
 
   
   // Owl Carousel scrypt
   
   $("#owl-demo").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: 3000,
      stopOnHover: true,
      responsive: true
 
   });
  

   // Smooth scrolling page
   
   try {
          $.browserSelector();
          if ($("html").hasClass("chrome")) {
               $.smoothScroll();
          }
     } catch (err) {

     };
   
   
   // Smooth scrolling to an anchor
   
   $("#menu").on("click", "a", function (event) {
          event.preventDefault();
          var id = $(this).attr('href'),
               top = $(id).offset().top;
          $('body,html').animate({
               scrollTop: top
          }, 1000);
     });
   
   
   // Scroll to the top
   
   $(function () {
          $.fn.scrollToTop = function () {
               $(this).hide().removeAttr("href");
               if ($(window).scrollTop() != "0") {
                    $(this).fadeIn("slow")
               }
               var scrollDiv = $(this);
               $(window).scroll(function () {
                    if ($(window).scrollTop() == "0") {
                         $(scrollDiv).fadeOut("slow")
                    } else {
                         $(scrollDiv).fadeIn("slow")
                    }
               });
               $(this).click(function () {
                    $("html, body").animate({
                         scrollTop: 0
                    }, 1300)
               })
          }
     });
     $(function () {
          $("#to-top").scrollToTop();
     });
 
});