// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200, /* время перелистывания слайда в милисекундах */
//         /* adaptiveHeight: true,  *//* адаптация под размер картинки чтобы точки были выше или ниже */
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left_solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right_solid.png"></button>',
//         responsive: [
//             {
//               breakpoint: 992, /* планшет, уберем стрелки */
//               settings: {
//                 dots: true,
//                 arrows: false
//               }
//             }   
//         ]      
//     });
// });

// // const prevArrow = '<img src="../icons/chevron_left_solid.png" alt:"left">';
// const nextArrow = '<img src="../icons/chevron_right_solid.png" alt:"right">';


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        // responsive:{
        //     0:{
        //         nav:false
        //     },
        //     991:{
        //         nav:true
        //     }
            
        // },
        navText: [
            '<img src="../icons/chevron_left_solid.png" alt:"left">',
            '<img src="../icons/chevron_right_solid.png" alt:"right">'
        ]
        });
    }
);
