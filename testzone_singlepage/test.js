const com_prefix = '//'

// what components do we need
const coms = document.querySelectorAll('[id^=mwcom]')

for (const c of coms) {
	//  load js
	let script = document.createElement('script')

	script.type = 'text/javascript'
	script.src =
		// `${com_prefix}${c.id.replace(
		// 	/mwcom-|-/g,
		// 	(m) => name_fix[m]
		// )}.js`
		`${com_prefix}${c.id.replaceAll('-', '_')}.js`

	document.head.appendChild(script)

	if (eval(c.getAttribute('mwstyle'))) {
		//  load css if need
		let link = document.createElement('link')
		link.rel = 'stylesheet'
		link.href = `${com_prefix}${c.id.replaceAll('-', '_')}.css`
		document.head.appendChild(link)
	}
}

// let script = document.createElement('script')
// script.type = 'text/javascript'
// script.src = 'https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js'

// document.head.appendChild(script)
