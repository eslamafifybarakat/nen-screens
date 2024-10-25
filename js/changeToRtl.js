export function changeToRtl(href) {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('lang') === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl')
            document.documentElement.setAttribute('lang', 'ar')
            document.getElementById('lang').innerHTML = 'العربية'
            document.getElementById('langFlag').src = './images/flags/sa.svg';
            var rtlStylesheet = document.createElement('link');
            rtlStylesheet.rel = 'stylesheet';
            rtlStylesheet.href = href;
            document.head.append(rtlStylesheet);
        }
    }
}