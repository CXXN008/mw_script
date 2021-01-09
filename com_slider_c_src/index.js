console.log('mwcom_slider loaded ...')
// import Swiper JS
import Swiper from './swiper-bundle'
// import Swiper styles
import './swiper-bundle.css'
import './slider-ex.scss'

let com = document.querySelector('#mwcom-slider-c')
com.style.display = 'inline'
let params = {}
if (com.innerText.search('mwcom-config:') > 0) {
	params = eval(com.innerText.replace(/.+mwcom-config:/g, ''))
	console.log(params)
}

// construct a swiper
let w_gallery = document.createElement('div')

let s_container = document.createElement('div')
s_container.className = 'swiper-container gallery-top'

// let s_thumbs = document.createElement('div')
// s_thumbs.className = 'swiper-container gallery-thumbs'

let s_wrapper_top = document.createElement('div')
s_wrapper_top.className = 'swiper-wrapper'

let s_wrapper_thumb = document.createElement('div')
s_wrapper_thumb.className = 'swiper-wrapper'

let s_img = com.querySelectorAll('img')

for (let i = 0; i < s_img.length; i++) {
	const e = s_img[i]
	let s_slide_top = document.createElement('div')

	s_slide_top.className = 'swiper-slide'
	// s_slide_top.style.backgroundImage = `url(${e.src})`

	// let s_slide_thumb = document.createElement('div')
	// s_slide_thumb.className = 'swiper-slide'
	// s_slide_thumb.style.backgroundImage = `url(${e.src})`

	let s_div = document.createElement('div')
	s_div.id = 's-div'

	// s_div.click = function () {
	// 	console.log(1)
	// }

	let s_title = document.createElement('h1')
	console.log(params['img'][i])
	s_title.innerText = params['img'][i]['title']

	let s_text = document.createElement('p')
	s_text.innerText = params['img'][i]['text']

	s_div.append(s_title)
	s_div.append(s_text)
	s_slide_top.append(s_div)

	let img = document.createElement('img')
	img.style.height = '100%'
	img.style.width = '100%'
	img.src = e.src

	let a = document.createElement('a')
	a.href = params['img'][i]['href']
	a.target = '_blank'
	a.append(img)

	s_slide_top.append(a)

	s_wrapper_top.append(s_slide_top)
	// s_wrapper_thumb.append(s_slide_thumb)
}

let s_pagination = document.createElement('div')
s_pagination.className = 'swiper-pagination'
let s_next = document.createElement('div')
s_next.className = 'swiper-button-next'
let s_prev = document.createElement('div')
s_prev.className = 'swiper-button-prev'

w_gallery.append(s_container)
// w_gallery.append(s_thumbs)

s_container.append(s_wrapper_top)
// s_thumbs.append(s_wrapper_thumb)

s_container.append(s_pagination)
s_container.append(s_next)
s_container.append(s_prev)

w_gallery.style.height = params['global']['height']

com.innerHTML = w_gallery.outerHTML

// init

new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: params['global']['play_delay'],
		disableOnInteraction: false,
	},
})
