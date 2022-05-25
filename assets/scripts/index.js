$(document).ready(function() {
    //javascript for navigation bar effect on scroll
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });
  
      //javascript for responsive navigation sidebar menu
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
  
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle('active');
      });


      function myFunction(x) {
        x.classList.toggle("change");
      }



//       $('.owl-carousel').owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
        
//     });

    
//     var typed = new Typed(".type1", {
//       strings: [" The World"],
//       typeSpeed: 100,
//       backSpeed: 40,
//       loop: true
//   });
    
//   var typed1 = new Typed1(".type2", {
//     strings: [" The World"],
//     typeSpeed: 100,
//     backSpeed: 40,
//     loop: true
// });
    
// var typed2 = new Typed2(".type3", {
//   strings: [" The World"],
//   typeSpeed: 100,
//   backSpeed: 40,
//   loop: true
// });
});
