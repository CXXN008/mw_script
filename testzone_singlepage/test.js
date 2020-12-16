const com_prefix = './'
const name_fix = {
	'-': '_',
	'mwmaho-': '',
}
const main = document.querySelector('head')
// what components do we need
const coms = document.querySelectorAll('[id^=mwmaho]')
import './music-player.scss'

// dynamic load resource
for (const c of coms) {
	let script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = `${com_prefix}${c.id.replace(
		/mwmaho-|-/g,
		(m) => name_fix[m]
	)}.js`
	document.head.appendChild(script)
}
