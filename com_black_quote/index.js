let com = document.querySelector('#mwcom-black-quote')
let params = {}
if (com.innerText.search('mwcom-config:') > 0) {
	console.log(com.innerText.replace(/.+mwcom-config:/g, ''))
	params = eval(com.innerText.replace(/.+mwcom-config:/g, ''))
}
let style = document.createElement('style')
style.innerHTML = `
.black-quote {
    background-color: black;
    color: black;
    transition: color .3s;

}
.black-quote:hover{
    color: white;
    transition: color .3s;
}
`
document.head.append(style)
document.body.innerHTML = document.body.innerHTML.replace(/&lt;black-quote&gt;/g,'<span class=\'black-quote\'>')
document.body.innerHTML = document.body.innerHTML.replace(/&lt;\/black-quote&gt;/g,'</span>')

