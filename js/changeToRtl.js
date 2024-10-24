export function changeToRtl(href){
    if(localStorage.getItem('lang')==='ar'){
        document.documentElement.setAttribute('dir','rtl')
        document.documentElement.setAttribute('lang','ar')
        document.getElementById('lang').innerHTML='Ar'
        var rtlStylesheet = document.createElement('link');
        rtlStylesheet.rel = 'stylesheet';
        rtlStylesheet.href = href;
        document.head.append(rtlStylesheet);
}
}