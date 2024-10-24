export function handleLanguage(buttons) {
    localStorage.setItem('lang',localStorage.getItem('lang')||'en')
    document.querySelectorAll(buttons).forEach(btn => {
        btn.addEventListener('click', () => {
            let langCode;
            langCode=   btn.innerHTML === 'English'? 'en': 'ar';
            
            
            if (window.localStorage.getItem('lang') !== langCode) {
                window.localStorage.setItem('lang', langCode);
                window.location.reload();
            }
        });
    });
}

