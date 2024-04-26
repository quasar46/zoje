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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcblx0Y29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NvbnRhY3RzJylcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXHRidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXHRcdG1vYmlsZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblx0XHRib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXHR9KVxuXG5cdGNvbnN0IHdyYXBzR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkJylcblx0d3JhcHNHcmlkLmZvckVhY2god3JhcCA9PiB7XG5cdFx0Y29uc3QgaXRlbXMgPSB3cmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkX19pdGVtJylcblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aXRlbS5zdHlsZS5ncmlkQXJlYSA9IGBnYSR7aW5kZXh9YFxuXHRcdH0pXG5cdH0pXG5cblx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1oaXN0b3J5Jywge1xuXHRcdHNsaWRlc1BlclZpZXc6IDQsXG5cdFx0c3BhY2VCZXR3ZWVuOiAxMCxcblx0XHRhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG5cdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG5cdFx0XHQvLyBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2Jyxcblx0XHR9LFxuXHRcdHBhZ2luYXRpb246IHtcblx0XHRcdGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxuXHRcdFx0cmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuXHRcdFx0XHRyZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+IDxpPiR7aW5kZXggKyAxOTk0fTwvaT4gPC9zcGFuPiBgXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0YnJlYWtwb2ludHM6IHtcblx0XHRcdDc2ODoge1xuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDEwLFxuXHRcdFx0fSxcblx0XHRcdDA6IHtcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMTUsXG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXHRjb25zdCBidWxsZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LWhpc3RvcnlfX3NsaWRlci1uYXYnKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0Jylcblx0c3dpcGVyLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRidWxsZXRzW3N3aXBlci5yZWFsSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuXHRcdC8vIGJ1bGxldHNbc3dpcGVyLnJlYWxJbmRleF0uc3R5bGUuekluZGV4ID0gYCR7c3dpcGVyLnJlYWxJbmRleH1gXG5cdH0pXG5cblx0dmFyIHN3aXBlclRodW1icyA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyVGh1bWJzXCIsIHtcblx0XHRzcGFjZUJldHdlZW46IDAsXG5cdFx0c2xpZGVzUGVyVmlldzogNCxcblx0XHRmcmVlTW9kZTogdHJ1ZSxcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuXHRcdGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuXHRcdGJyZWFrcG9pbnRzOiB7XG5cdFx0XHQ3Njc6IHtcblx0XHRcdFx0ZGlyZWN0aW9uOiBcInZlcnRpY2FsXCJcblx0XHRcdH0sXG5cdFx0XHQwOiB7XG5cdFx0XHRcdGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0dmFyIHN3aXBlclNpbmdsZSA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyU2luZ2xlXCIsIHtcblx0XHRzcGFjZUJldHdlZW46IDEwLFxuXHRcdG5hdmlnYXRpb246IHtcblx0XHRcdG5leHRFbDogXCIuc3dpcGVyU2luZ2xlIC5zd2lwZXItYnV0dG9uLW5leHRcIixcblx0XHRcdHByZXZFbDogXCIuc3dpcGVyU2luZ2xlIC5zd2lwZXItYnV0dG9uLXByZXZcIixcblx0XHR9LFxuXHRcdHRodW1iczoge1xuXHRcdFx0c3dpcGVyOiBzd2lwZXJUaHVtYnMsXG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNldHRpbmdzJylcblx0c3dpcGVyU2luZ2xlLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZyhzd2lwZXJTaW5nbGUucmVhbEluZGV4KVxuXHRcdHNldHRpbmdzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NldHRpbmdzLXNob3cnKVxuXHRcdH0pXG5cdFx0c2V0dGluZ3Nbc3dpcGVyU2luZ2xlLnJlYWxJbmRleF0uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3Mtc2hvdycpXG5cdH0pXG5cblx0Y29uc3QgYnRuc1Nob3dNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWVkYmFjay1idG4nKVxuXHRjb25zdCBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKVxuXHRidG5zU2hvd01vZGFsLmZvckVhY2goYnRuID0+IHtcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRtb2RhbFdyYXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHRcdGJvZHkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblx0XHRcdG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XHRcdGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXHRcdH0pXG5cdH0pXG5cblx0Y29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXHRtb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY2xvc2VzdCgnLm1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cdH0pXG5cblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0bW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblx0fSlcblxuXHRjb25zdCBvdmVybGF5UHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LW92ZXJsYXknKVxuXG5cdGNvbnN0IHByb2R1Y3RDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19jbG9zZScpXG5cdHByb2R1Y3RDbG9zZUJ0bi5mb3JFYWNoKGJ0biA9PiB7XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5jbG9zZXN0KCcucHJvZHVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cdFx0XHRvdmVybGF5UHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXHRcdH0pXG5cdH0pXG5cblx0Y29uc3Qgc2hvd1Byb2R1Y3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1tb3JlJylcblx0c2hvd1Byb2R1Y3RCdG4uZm9yRWFjaChidG4gPT4ge1xuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHRcdG92ZXJsYXlQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cdFx0fSlcblx0fSlcblxuXG5cdGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QnKVxuXHRwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuXHRcdGlmIChwcm9kdWN0Lm9mZnNldEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuXHRcdFx0cHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwnKVxuXHRcdH1cblx0fSlcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
