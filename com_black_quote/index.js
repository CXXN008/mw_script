let com = document.querySelector('#mwcom-black-quote')
let params = {}
if (com.innerText.search('mwcom-config:') > 0) {
    params = eval(com.innerText.replace(/.+mwcom-config:/g, ''))
}
let style = document.createElement('style')
// <a>tag 特殊处理，其他一律按配置颜色来
style.innerHTML = `
.black-quote,.black-quote>* {
    background-color: ${params['background_color']};
    color: ${params['background_color']};
    transition: color ${params['animation_duration']}s;
}

.black-quote:hover,.black-quote:hover>* {
    color: ${params['text_color']};
    transition: color ${params['animation_duration']}s;
}

.black-quote:hover>a{
    color: #03A9F4;
}
`
// apply style
document.head.append(style)

// dynamic replace html lead to mediawiki self css does not work
// replace text
// document.body.innerHTML = document.body.innerHTML.replace(/&lt;black-quote&gt;/g,'<span class=\'black-quote\'>')
// document.body.innerHTML = document.body.innerHTML.replace(/&lt;\/black-quote&gt;/g,'</span>')

