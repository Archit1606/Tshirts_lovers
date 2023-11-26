// SEARCH
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')



if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}



if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}


// LOGIN
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')



if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}


if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}



//swiper
let swiperHome = new Swiper('.home__swiper',{
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPreView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay: 3000,
        disableOnInteraction:false,

    },
    breakpoints:{
        1220: {
            spaceBetween: -32,

        }
    }
})
//feature.swiper
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPreView:'auto',
    centeredSlides:'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1150: {
            slidesPreView: 4,
            centeredSlides: false,
        }
    }

})
//===================shadowheader=================================

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
//==========================NEW SWIPER==============================================
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPreView:'auto',
    breakpoints: {
        1150: {
            slidesPreView: 3,
        }
    }

})
//==========================testimonial========================================
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor:true,
    slidesPreView:'auto',
    centeredSlides:'auto',
    breakpoints: {
        1150: {
            slidesPreView: 3,
            centeredSlides: false,
        }
    }

})