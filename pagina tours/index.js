/**Configuracion Swiper */
/**Swiper Inicio */
let swiperInicio = new Swiper('.inicio__swiper',{
    direction:'horizontal',
    loop:true,
    autoplay:{
        delay:3000,
        disableOnIntereaction:false,
    },
    effect:"fade",
})

/** Swiper Testimonios */

let swiperTestimonios = new Swiper('.tesminonios__swiper',{
    direction:'horizontal',
    loop: true,
    navigation:{
        nextEl:'.button-next',
        prevEl:'.button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    breakpoints:{
        400:{
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
        },
    },
});