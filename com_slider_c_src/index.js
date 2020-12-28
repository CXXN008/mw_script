console.log('mwcom_slider loaded ...')
// import Swiper JS
import Swiper from './swiper-bundle'
// import Swiper styles
import './swiper-bundle.css'

let com = document.querySelector('#mwcom-slider-c')

// construct a swiper
let s_container = document.createElement('div')
s_container.className = 'swiper-container'
let s_wrapper = document.createElement('div')
s_wrapper.className = 'swiper-wrapper'

for (const e of com.children) {
	let s_slide = document.createElement('div')
	s_slide.className = 'swiper-slide'

	let img = document.createElement('img')
	img.style.width = '100%'
	img.style.height = '100%'
	img.src = e.querySelector('img').src
	s_slide.append(img)
	s_wrapper.append(s_slide)
}

let s_pagination = document.createElement('div')
s_pagination.className = 'swiper-pagination'
let s_next = document.createElement('div')
s_next.className = 'swiper-button-next'
let s_prev = document.createElement('div')
s_prev.className = 'swiper-button-prev'

s_container.append(s_wrapper)
s_container.append(s_pagination)
s_container.append(s_next)
s_container.append(s_prev)

com.innerHTML = s_container.outerHTML

// init
new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
