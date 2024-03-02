new Accordion('.accordion-container');
const $burger = document.getElementById("burger"),
  $burgerMenu = document.querySelector(".header"),
  $nav = document.querySelector(".header__nav"),
  $headerList = document.querySelector(".header__list"),
  $headerBurgerList = document.querySelectorAll(".header__list-item"),
  $search = document.getElementById("header-open-search"),
  $input = document.querySelector(".header__search-form"),
  $searchClose = document.getElementById("search-form-close"),
  $menuItem = document.querySelectorAll(".menu__item"),
  $menuBtn = document.querySelectorAll(".menu__btn"),
  $dropDownMenu = document.querySelectorAll(".dropdown-menu"),
  $acTab = document.querySelectorAll(".catalogue__ac-item-btn"),
  $tabContent = document.querySelectorAll(".catalogue__list-item"),
  $formValid = document.getElementById("add-form"),
  $scrollToTopBtn = document.getElementById('scrollToTopBtn'),
  $galleryProductCards = document.querySelectorAll('.gallery__modal-card')

function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }


  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)
  }

  let result = true

  const allInputs = form.querySelectorAll('input')

  for (const input of allInputs) {

    removeError(input)

    if (input.dataset.required == "true") {
      removeError(input)
    }

    if (input.value == "") {
      createError(input, 'Недопустимый формат!')
      result = false
    }

  }

  return result
}

function toggleModalProductCard(openBtn, closeBtn, modalName, id) {
  openBtn.addEventListener("click", function () {
    modalName.classList.add("active")
    modalName._isClick = true
  })

  closeBtn.addEventListener("click", function () {
    modalName.classList.remove("active")
  })

  window.addEventListener("click", function (event) {
    if (event.target === id) {
      modalName.classList.remove("active")
    }
  })

  modalName.addEventListener('click', event => {
    event.preventDefault()
    modalName._isClick = true
  })
}

// swiper hero
const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,
  // Пагинация
  pagination: {
    el: '.swiper-pagination-hero',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
})

// swiper gallery
const swiperGallery = new Swiper('.swiper-gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  preventInteractionOnTransition: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-gallery',
    clickable: true,
    type: 'fraction'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.gallery-swiper-btn-next',
    prevEl: '.gallery-swiper-btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    390: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 320px
    990: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1190: {
      slidesPerView: 3,
      spaceBetween: 25
    },
  }
})

// swiper events
const swiperEvent = new Swiper('.swiper-event', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-event',
    clickable: true,
  },
  preventInteractionOnTransition: false,
  // Navigation arrows
  navigation: {
    nextEl: '.event-swiper-btn'
  },

  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    590: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    890: {
      slidesPerView: 3,
      spaceBetween: 25
    },
  }
})

// swiper sales
const swiperSale = new Swiper('.swiper-sale', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  preventInteractionOnTransition: false,
  // Navigation arrows
  navigation: {
    nextEl: '.sale-swiper-btn-next',
    prevEl: '.sale-swiper-btn-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    690: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
})

// burger and search
document.addEventListener("DOMContentLoaded", function () {
  $burger.addEventListener("click", function () {
    $burgerMenu.classList.toggle("open")
  })
  $burger.addEventListener("click", function () {
    $nav.classList.toggle("open")
  })
  $headerBurgerList.forEach(function (item) {
    item.addEventListener("click", function () {
      $nav.classList.remove("open"),
        $burgerMenu.classList.remove("open")
    })
  })
  $search.addEventListener("click", function () {
    $input.classList.toggle("open")
  })
  $searchClose.addEventListener("click", function () {
    $input.classList.remove("open")
  })
  $input.addEventListener("submit", function (event) {
    event.preventDefault()
  })
})

//dropdown menu
$menuBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.parentElement.classList.toggle('menu-open')
    if (!btn.parentElement.classList.contains('menu-open')) {
      $menuItem.forEach(item => {
        item.classList.remove('menu-open')
      })
    } else {
      $menuItem.forEach(item => {
        item.classList.remove('menu-open')
      })
      e.target.parentElement.classList.add('menu-open')
    }
  })
})
document.body.addEventListener('click', function (event) {

  if (
    event.isClick == true ||
    event.target.classList.contains('menu__btn') == true ||
    event.target.classList.contains('dropdowm-menu') == true
  ) return

  $menuItem.forEach(item => {
    item.classList.remove('menu-open')
  })
})

//scroll
Array.prototype.forEach.call(
  document.querySelectorAll('.scroll'),
  el => new SimpleBar(el)
)

//select
const element = document.querySelector('.js-choice')
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
})

//checkbox
const checkbox1 = document.getElementById("flexCheckDefault")
const checkbox2 = document.getElementById("flexCheckChecked")
const checkbox3 = document.getElementById("flexCheckDefault3")

checkbox1.addEventListener("change", function () {
  if (this.checked) {
    checkbox2.checked = false
    checkbox3.checked = false
  }
})
checkbox2.addEventListener("change", function () {
  if (this.checked) {
    checkbox1.checked = false
    checkbox3.checked = false
  }
})
checkbox3.addEventListener("change", function () {
  if (this.checked) {
    checkbox1.checked = false
    checkbox2.checked = false
  }
})

// modal window 
// 1

const openModalButtonOne = document.getElementById("openModalButton1")
const closeModalButtonOne = document.getElementById("closeModalButton1")
const modalOne = document.getElementById("modal1")
toggleModalProductCard(openModalButtonOne, closeModalButtonOne, modalOne, modal1)

// 2
const openModalButtonTwo = document.getElementById("openModalButton2")
const closeModalButtonTwo = document.getElementById("closeModalButton2")
const modalTwo = document.getElementById("modal2")
toggleModalProductCard(openModalButtonTwo, closeModalButtonTwo, modalTwo, modal2)

// 3
const openModalButtonThree = document.getElementById("openModalButton3")
const closeModalButtonThree = document.getElementById("closeModalButton3")
const modalThree = document.getElementById("modal3")
toggleModalProductCard(openModalButtonThree, closeModalButtonThree, modalThree, modal3)

// 4
const openModalButtonFour = document.getElementById("openModalButton4")
const closeModalButtonFour = document.getElementById("closeModalButton4")
const modalFour = document.getElementById("modal4")
toggleModalProductCard(openModalButtonFour, closeModalButtonFour, modalFour, modal4)

// 5
const openModalButtonFive = document.getElementById("openModalButton5")
const closeModalButtonFive = document.getElementById("closeModalButton5")
const modalFive = document.getElementById("modal5")
toggleModalProductCard(openModalButtonFive, closeModalButtonFive, modalFive, modal5)

// 6
const openModalButtonSix = document.getElementById("openModalButton6")
const closeModalButtonSix = document.getElementById("closeModalButton6")
const modalSix = document.getElementById("modal6")
toggleModalProductCard(openModalButtonSix, closeModalButtonSix, modalSix, modal6)

//events for closing
document.addEventListener('click', () => {
  $galleryProductCards.forEach(modal => {
    if (modal.classList.contains('active')) {
      if (!modal._isClick) {
        modal.classList.remove('active')
      }
      modal._isClick = false
    }
  })
})


//accordeon 
$acTab.forEach(function (acTabs) {
  acTabs.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path

    $acTab.forEach(function (link) {
      link.classList.remove('accordeon-tab--active')
    })
    e.currentTarget.classList.add('accordeon-tab--active')

    $tabContent.forEach(function (tab) {
      tab.classList.remove('tab-content--active')
    })

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
      tab.classList.add('tab-content--active')
    })
  })
})

// form
$formValid.addEventListener('submit', function (event) {
  event.preventDefault()

  if (validation(this) == true) {
    alert('Форма отправлена!')
  }

  else {

  }
})

//scroll button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    $scrollToTopBtn.classList.add('show')
  } else {
    $scrollToTopBtn.classList.remove('show')
  }
}, { passive: true })

$scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})