// slider-section2
$('#slider-project').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        375: {
            items: 1
        },
        500: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

var owl = $('.section-2 .owl-carousel');
owl.owlCarousel();
$('.butn-outline_slider').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.butn-primary_slider').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
})

$("#slider-comment").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
});



// bat tat menu mobile 
const openNavBtn = document.querySelectorAll('[data-nav-target]');
const closeNavBtn = document.querySelectorAll('[data-nav-close]');
const iconOpenNav = document.getElementById('iconopennav')
const bodyMainOverflow = document.getElementById('body-main')


openNavBtn.forEach(button => {
    button.addEventListener('click', () => {
        const navs = document.querySelector(button.dataset.navTarget)
        openNav(navs)
    })
})
closeNavBtn.forEach(button => {
    button.addEventListener('click', () => {
        const navs = button.closest('.navs-links')
        closeNav(navs)
    })
})
function openNav(navs) {
    if (navs == null) return
    navs.classList.add('nav-ative')
    // iconOpenNav.classList.add('d-none')
    bodyMainOverflow.setAttribute('style', 'overflow-y: hidden;')
}
function closeNav(navs) {
    if (navs == null) return
    navs.classList.remove('nav-ative')
    // iconOpenNav.classList.remove('d-none')
    bodyMainOverflow.setAttribute('style', '')
}



// navgation scroll

const body = document.body
const navBars = document.getElementById('navsbar')

let lastScroll = 0

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 80) {
        navBars.setAttribute("style", "background-color: transparent; box - shadow: none;")
    }

    // if (currentScroll <= 300) {
    //     body.classList.add('tranparent-scroll-up')
    //     navBars.setAttribute("style", "@media screen and (max-width:1024px) #navsbar{background-color: transparent; box-shadow: none;}")
    // }
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
        navBars.setAttribute("style", "")
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
        navBars.setAttribute("style", "")
    }
    lastScroll = currentScroll
})

// active search 
$(document).on('click', '#hero-search ul li', function () {
    $(this).addClass('ative').siblings().removeClass('ative')
})

// active setting 
$(document).on('click', '#setting .setting-bar ul li', function () {
    $(this).addClass('ative').siblings().removeClass('ative')
})