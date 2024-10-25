export function handleLanguage(buttons) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('lang', localStorage.getItem('lang') || 'en')
        document.querySelectorAll(buttons).forEach(btn => {
            btn.addEventListener('click', () => {
                let langCode;
                langCode = btn.getAttribute('name') === 'english' ? 'en' : 'ar';
                if (window.localStorage.getItem('lang') !== langCode) {
                    window.localStorage.setItem('lang', langCode);
                    window.location.reload();
                }
            });
        });
    }
}

