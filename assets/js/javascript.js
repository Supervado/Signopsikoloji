/* =========== SHOW MENU ================= */
const navMenu= document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')


/* ========= MENU SHOW ================= */

/* Validate if constant exists */

if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add("show-menu")
    })
}

/* ============= MENU HIDDEN ============ */

/* Validate if constant exists */

if(navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove("show-menu")
    })
}

/* ================ REMOVE MENU MOBILE =========== */

const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav link, we remove the show menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ==================== CHANGE BACKGROUND HEADER =================  */

function scrollHeader () {
    const header = document.getElementById("header");
    if(this.scrollY >= 100) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)


/* =================== VIDEO =================== 
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //Play video
        videoFile.play()
        //we change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        // Pause video
        videoFile.pause()

        // We chane the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo() {
    //Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
//ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

/* =============== SHOW SCROLL UP ======== */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* ======== SCROLL SETTINGS ACTIVE LINK =========== */

const sections= document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ====== Dark -- Light Theme ===== */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previously selected topic  if user selected 

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain current theme that the interface has by validating the dark theme class. 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line' 

// we validate if the user previously choose a topic

if (selectedTheme) {
    // if the validate is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate deactivate the theme manually with the button

themeButton.addEventListener('click', ()=> {
    // add or remove dark icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose 
    localStorage.setItem('selected-theme', getCurrentTheme() )
    localStorage.setItem('selectedIcon' , getCurrentIcon())
})

/* ================= SCROLL REVEAL ANIMATIONS ============= */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})
sr.reveal(`.home__data, .home__social-linkAction, .home__info, .egitimler__container, .experience__data, .experience__overlay, .terapi__card, .sponsor__content, .footer__data, .footer__rights`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, .video__description, .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, .video__content, .subscribe__form`,{
    origin: 'right',
    interval: 100,
})


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/* =================== SWIPER DISCOVER ======================== */
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});