//   1. Color Flipper

const flipperColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
const flipperBtnDefault = document.getElementById('btn-one')
const flipperBackgroundDefault = document.querySelector('.default')
const flipperColorDefault = document.querySelector(".color-one")

flipperBtnDefault.addEventListener('click', function () {
    let randomNumber = getRandomNumber()
    flipperBackgroundDefault.style.background = flipperColors[randomNumber]
    flipperColorDefault.textContent = flipperColors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * flipperColors.length)
}



const flipperWords = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const flipperBtnHex = document.getElementById('btn-two')
const flipperBackgroundHex = document.querySelector('.hex')
const flipperColorHex = document.querySelector(".color-two")

flipperBtnHex.addEventListener('click', function () {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex += flipperWords[myRandomNumber()]
    }
    flipperBackgroundHex.style.background = hex
    flipperColorHex.textContent = hex
})

function myRandomNumber() {
    return Math.floor(Math.random() * flipperWords.length)
}

//   2. Counter

const value = document.getElementById('value')
const counterBtns = document.querySelectorAll('.count-btn')

let counterNumber = 0

counterBtns.forEach(function (counterBtn) {
    counterBtn.addEventListener('click', function () {
        if (counterBtn.classList.contains('decrease')) {
            counterNumber--
        } else if (counterBtn.classList.contains('increase')) {
            counterNumber++
        } else {
            counterNumber = 0
        }

        if (counterNumber < 0) {
            value.style.color = 'red'
        } else if (counterNumber > 0) {
            value.style.color = 'green'
        } else {
            value.style.color = 'black'
        }
        value.textContent = counterNumber
    })
})

//   3. Reviews

const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const reviewsImg = document.querySelector('.reviews__img>img')
const reviewsAuthor = document.querySelector('.reviews__author')
const reviewsJob = document.querySelector('.reviews__job')
const reviewsInfo = document.querySelector('.reviews__info')

const reviewsPrevBtn = document.querySelector('.arrows__prev-btn')
const reviewsNextBtn = document.querySelector('.arrows__next-btn')
const reviewsSurpriseBtn = document.querySelector('.arrows__surprise-btn')

let reviewsCurrentItem = 0
const reviewsLength = reviews.length - 1

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const reviewsItem = reviews[reviewsCurrentItem]
    reviewsImg.src = reviewsItem.img
    reviewsAuthor.textContent = reviewsItem.name
    reviewsJob.textContent = reviewsItem.job
    reviewsInfo.textContent = reviewsItem.text
})

// show person based on item
function showPerson(person) {
    const reviewsItem = reviews[person]
    reviewsImg.src = reviewsItem.img
    reviewsAuthor.textContent = reviewsItem.name
    reviewsJob.textContent = reviewsItem.job
    reviewsInfo.textContent = reviewsItem.text
}

reviewsNextBtn.addEventListener('click', function () {
    reviewsCurrentItem++
    if (reviewsCurrentItem > reviewsLength) {
        reviewsCurrentItem = 0
    }
    showPerson(reviewsCurrentItem)
})

reviewsPrevBtn.addEventListener('click', function () {
    reviewsCurrentItem--
    if (reviewsCurrentItem < reviews.length) {
        reviewsCurrentItem = 0
    }
    showPerson(reviewsCurrentItem)
})

reviewsSurpriseBtn.addEventListener('click', function () {
    reviewsCurrentItem = Math.floor(Math.random() * reviews.length)
    showPerson(reviewsCurrentItem)
})

//   4. Navbar

const navbarMenu = document.querySelector('.navbar__img')
const navbarList = document.querySelector('.margin')

navbarMenu.addEventListener('click', function () {
    navbarList.classList.toggle('active')
})

//   5. Sidebar

const sidebarCloseBtn = document.querySelector('.sidebar__close')
const sidebarMenuBtn = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')

sidebarMenuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active')
})

sidebarCloseBtn.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

//   5. Modal Window

const modalBtnOpen = document.querySelector('.modal__btn-open')
const modalBtnClose = document.querySelector('.modal__btn-close')
const modalWindow = document.querySelector('.modal__img')

modalBtnOpen.addEventListener('click', function (e) {
    e.preventDefault()
    modalWindow.classList.add('active')
})

modalBtnClose.addEventListener('click', function (e) {
    e.preventDefault()
    modalWindow.classList.remove('active')
})

//   6. Questions

const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn')
    questions.forEach(function (item) {
        btn.addEventListener('click', function (e) {
            if (item !== question) {
                item.classList.remove('show-text')
            }
            question.classList.toggle('show-text')
        })
    })
})

//   7. Video

const video = document.getElementById('myvideotag');
const videoBtns = document.querySelectorAll('.video__btn')

videoBtns.forEach(function (videoBtn) {
    videoBtn.addEventListener('click', function (e) {
        e.preventDefault()
        if (videoBtn.classList.contains('pause')) {
            video.pause()
        } else {
            video.play()
        }
    })
})

//   8. Tabs

const tabs = document.querySelectorAll('.tabs-tabs-item')
const tabsContent = document.querySelectorAll('.tabs-content-item')

tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
        tabs.forEach(function (item) {
            item.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        let currTab = e.currentTarget.dataset.tab
        tabsContent.forEach(function (tabContent) {
            tabsContent.forEach(function (tabbs) {
                tabbs.classList.remove('active')
            })
            let currTabCont = document.getElementById(currTab)
            currTabCont.classList.add('active')
        })
    })
})

//   9. Countdown Timer

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const timerText = document.querySelector('.timer__title')
const times = document.querySelectorAll('.timer-item__count')

const futureDate = new Date(2022,2,26,0,0,0,1)

const timerYear = futureDate.getFullYear()
const timerMonth = months[futureDate.getMonth()]
const timerDate = futureDate.getDate()
const timerHours = futureDate.getHours() + '0'
const timerMinutes = futureDate.getMinutes() + '0'
const timerDay = weekdays[futureDate.getDay()]

timerText.textContent = `ярикино др начнется ${timerDay}, ${timerDate} ${timerMonth} ${timerYear}, в ${timerHours}:${timerMinutes}`

function getTime() {
    const today = new Date().getTime()
    const dateLeft = futureDate.getTime() - today

    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000
    const oneSecond = 1000

    let days = Math.floor(dateLeft / oneDay)
    let hours = Math.floor((dateLeft % oneDay) / oneHour)
    let mins = Math.floor((dateLeft % oneHour) / oneMinute)
    let secs = Math.floor((dateLeft % oneMinute) / oneSecond)

    times.forEach(function (time) {
        if (time.classList.contains('timer-item__count-days')) {
            time.textContent = days
        } else if (time.classList.contains('timer-item__count-hours')) {
            time.textContent = hours
        } else if (time.classList.contains('timer-item__count-mins')) {
            time.textContent = mins
        } else if (time.classList.contains('timer-item__count-secs')) {
            time.textContent = secs
        }
    })
    let countdown = setInterval(getTime,1000)
}

getTime()

//   11. Slider

const slides = document.querySelectorAll('.slider__item')
const next = document.querySelector('.slide-next')
const prev = document.querySelector('.slide-prev')

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
}

const nextSlide = () => {
    if(index === slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index === 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Animations)

const portfolioCards = document.querySelectorAll('.portfolio__cards')
const portfolioContainer = document.querySelector('.portfolio__container')

portfolioCards.forEach(function (portfolioCard) {
    portfolioCard.addEventListener('click', function () {
        portfolioContainer.classList.toggle('portfolio__cards_active')
    })
})

const menuBtns = document.querySelectorAll('.menu__btn')
const navMenuBtn = document.querySelector('.nav-menu__btn')
const burgerIcons = document.querySelector('.burger-icons')
const burgerMenuBtn = document.querySelector('.burger-menu__btn')
const navMenuList = document.querySelector('.nav-menu__list')

menuBtns.forEach(function (menuBtn) {
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault()
        this.classList.toggle('menu__btn_active')
    })
})

burgerMenuBtn.addEventListener('click', function (e) {
    e.preventDefault()
    this.classList.toggle('burger-menu__btn_active')
    burgerIcons.classList.toggle('burger-icons_active')
})

navMenuBtn.addEventListener('click', function (e) {
    e.preventDefault()
    navMenuBtn.classList.toggle('nav-menu__btn_active')
    navMenuList.classList.toggle('nav-menu__list_active')
})