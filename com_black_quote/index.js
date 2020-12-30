let com = document.querySelector('#mwcom-black-quote')
let params = {}
if (com.innerText.search('mwcom-config:') > 0) {
    params = eval(com.innerText.replace(/.+mwcom-config:/g, ''))
    console.log(params);
}
let style = document.createElement('style')
style.innerHTML = `
.black-quote {
    background-color: ${params['background_color']};
    color: ${params['background_color']};
    transition: color ${params['animation_duration']}s;

}
.black-quote:hover {
    color: ${params['text_color']};
    transition: color ${params['animation_duration']}s;
}
`
console.log(style);
// apply style
document.head.append(style)
// replace text
document.body.innerHTML = document.body.innerHTML.replace(/&lt;black-quote&gt;/g,'<span class=\'black-quote\'>')
document.body.innerHTML = document.body.innerHTML.replace(/&lt;\/black-quote&gt;/g,'</span>')

