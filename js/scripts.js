const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    375: {
      slidesPerView: 1.38,
    },
    576 : {
      slidesPerView: 2.3,
    },
    768 : {
      slidesPerView: 3.3,
    },
    1280: {
      slidesPerView: 4.22,
    },
  },
})

let favouriteCount = 0;

const favouriteCounter = document.querySelector('.header__favorites-count')
const favouriteButtons = document.querySelectorAll('.trends__card-favourite')

const header = document.querySelector('.header')
const menuBtn = document.querySelector('.header__menu-btn')
const overlay = document.querySelector('.overlay')

favouriteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('trends__card-favourite--active')) {
      btn.classList.remove('trends__card-favourite--active')
      favouriteCount--
    } else {
      btn.classList.add('trends__card-favourite--active')
      favouriteCount++
    }

    if (favouriteCount === 0) {
      favouriteCounter.classList.remove('header__favorites-count--active')
    }

    if (favouriteCount === 1) {
      favouriteCounter.classList.add('header__favorites-count--active')
    }

    if (favouriteCount) {
      favouriteCounter.textContent = favouriteCount
    }
  })
})

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__menu-btn--close')
  header.classList.toggle('header--menu')

  document.body.classList.toggle('body--no-scroll')

  toggleOverlay()
})

function toggleOverlay() {
  if (document.body.classList.contains('body--no-scroll')) {
    overlay.classList.add('overlay--block')
    overlay.classList.add('overlay--visib')
  } else {
    overlay.classList.remove('overlay--visib')
    setTimeout(() => {
      overlay.classList.remove('overlay--block')
    }, 200)
  }
}