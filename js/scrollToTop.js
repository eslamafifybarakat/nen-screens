export function scrollToTop(element, visibleClass, hiddenClass) {
    if (typeof window !== 'undefined') {
        const btn = document.getElementById(element);
        if (btn) {
            window.addEventListener('scroll', () => {
                const action = window.scrollY > 0 ? 'add' : 'remove';
                btn.classList[action](visibleClass);
                btn.classList[action === 'add' ? 'remove' : 'add'](hiddenClass)
                btn.addEventListener('click', () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                )
            })
        }
    }
}