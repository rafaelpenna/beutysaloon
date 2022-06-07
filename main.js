/* Abre e fecha o Mneu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* Esconder menu ao clicar nos links */
const links = document.querySelectorAll('nav ul li a') 

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* Mudar o Header da pagina quando der o Scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

/* Testimonials Swiper */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        992: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    } 
})

/* Scroll Reveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30 px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
{ interval: 100 }
)

/* Back to Top */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})

