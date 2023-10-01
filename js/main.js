

$(document).ready(function(){

    // nav-bg-color-change-js
    $(window).scroll(function(){
        if($(window).scrollTop()>150){
            $(".navbar").addClass("nav-bg-change")
        } else {
            $(".navbar").removeClass("nav-bg-change")
        } 
    })


    // scrollTop fadeIn & fadeOutjs
    $(window).scroll(function(){
        if($(window).scrollTop()>150){
            $(".scrollTop").fadeIn(1000)
        } else {
            $(".scrollTop").fadeOut(1000)
        }
    })


    // counterup js
    // item-1
     $(function(){
        $(".num1").numScroll({
          number: 400,
          time: 30000,
          fromZero:true,
        });     
      });
    // item-1
     $(function(){
        $(".num2").numScroll({
          number: 520,
          time: 30000,
          fromZero:true,
        });     
      });
    // item-1
     $(function(){
        $(".num3").numScroll({
          number: 1445,
          time: 30000,
          fromZero:true,
        });     
      });
    // item-1
     $(function(){
        $(".num4").numScroll({
          number: 35,
          time: 30000,
          fromZero:true,

        });     
      });
   


    // menu/mixitup js
     var mixer = mixitup('.our-menu-card');

     

    // AOS animation js
     AOS.init();
   
      // Select the image element you want to rotate
      const rotatingImage = document.getElementById("rotating-image");

      // Use GSAP to create a rotation animation
        gsap.to(rotatingImage, {
        duration: 20, // Duration of the animation in seconds
        rotation: 360, // Number of degrees to rotate (360 for a full circle)
        repeat: -1, // Number of times to repeat the animation (-1 for infinite)
        ease: "linear" // Easing function (optional, "linear" for a constant speed rotation)
});
    

})








