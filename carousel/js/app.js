(function($){
    "use strict";

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    
}) (jQuery)

