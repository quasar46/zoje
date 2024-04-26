'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger')
	const mobileMenu = document.querySelector('.header__contacts')
	const body = document.querySelector('body')
	burger.addEventListener('click', function () {
		this.classList.toggle('active')
		mobileMenu.classList.toggle('active')
		body.classList.toggle('hidden');
	})

	const wrapsGrid = document.querySelectorAll('.grid')
	wrapsGrid.forEach(wrap => {
		const items = wrap.querySelectorAll('.grid__item')
		items.forEach((item, index) => {
			item.style.gridArea = `ga${index}`
		})
	})

	const swiper = new Swiper('.swiper-history', {
		slidesPerView: 4,
		spaceBetween: 10,
		allowTouchMove: false,
		navigation: {
			nextEl: '.swiper-button-next',
			// prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}"> <i>${index + 1994}</i> </span> `
			},
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			0: {
				slidesPerView: "auto",
				spaceBetween: 15,
			}
		}
	})
	const bullets = document.querySelector('.about-history__slider-nav').querySelectorAll('.swiper-pagination-bullet')
	swiper.on('slideChange', function () {
		bullets[swiper.realIndex].classList.add('current')
		// bullets[swiper.realIndex].style.zIndex = `${swiper.realIndex}`
	})

	var swiperThumbs = new Swiper(".swiperThumbs", {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		direction: "vertical",
		breakpoints: {
			767: {
				direction: "vertical"
			},
			0: {
				direction: "horizontal",
			}
		}
	});
	var swiperSingle = new Swiper(".swiperSingle", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiperSingle .swiper-button-next",
			prevEl: ".swiperSingle .swiper-button-prev",
		},
		thumbs: {
			swiper: swiperThumbs,
		},
	});
	const settings = document.querySelectorAll('.settings')
	swiperSingle.on('slideChange', function () {
		console.log(swiperSingle.realIndex)
		settings.forEach(item => {
			item.classList.remove('settings-show')
		})
		settings[swiperSingle.realIndex].classList.add('settings-show')
	})

	const btnsShowModal = document.querySelectorAll('.feedback-btn')
	const modalWrap = document.querySelector('.modal')
	btnsShowModal.forEach(btn => {
		btn.addEventListener('click', function () {
			modalWrap.classList.add('active')
			body.classList.add('hidden')
			mobileMenu.classList.remove('active')
			burger.classList.remove('active')
		})
	})

	const modalCloseBtn = document.querySelector('.modal__close')
	modalCloseBtn.addEventListener('click', function () {
		this.closest('.modal').classList.remove('active')
		body.classList.remove('hidden')
	})

	const form = document.querySelector('.form')
	form.addEventListener('submit', function () {
		modal.classList.remove('active')
	})

	const overlayProduct = document.querySelector('.product-overlay')

	const productCloseBtn = document.querySelectorAll('.product__close')
	productCloseBtn.forEach(btn => {
		btn.addEventListener('click', function () {
			this.closest('.product').classList.remove('active')
			overlayProduct.classList.remove('active')
			body.classList.remove('hidden')
		})
	})

	const showProductBtn = document.querySelectorAll('.show-more')
	showProductBtn.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault()
			document.querySelector('.product').classList.add('active')
			overlayProduct.classList.add('active')
			body.classList.add('hidden')
		})
	})


	const products = document.querySelectorAll('.product')
	products.forEach(product => {
		if (product.offsetHeight > window.innerHeight) {
			product.classList.add('scroll')
		}
	})
})