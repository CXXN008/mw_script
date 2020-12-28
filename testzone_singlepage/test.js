const com_prefix = './'
const name_fix = {
	'-': '_',
	'mwcom-': '',
}
// what components do we need
const coms = document.querySelectorAll('[id^=mwcom]')

// dynamic load resource
for (const c of coms) {
	let script = document.createElement('script')
	script.type = 'text/javascript'
	script.src = `${com_prefix}${c.id.replace(
		/mwcom-|-/g,
		(m) => name_fix[m]
	)}.js`
	document.head.appendChild(script)
}

// let script = document.createElement('script')
// script.type = 'text/javascript'
// script.src = 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'

// document.head.appendChild(script)
