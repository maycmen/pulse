$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200, /* время перелистывания слайда в милисекундах */
        /* adaptiveHeight: true,  *//* адаптация под размер картинки чтобы точки были выше или ниже */
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right_solid.png"></button>',
        responsive: [
            {
              breakpoint: 992, /* планшет, уберем стрелки */
              settings: {
                dots: true,
                arrows: false
              }
            }   
        ]      
    });
});
