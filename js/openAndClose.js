export function openAndClose(buttons, item, className, closeBtn = null, removeItems = [], removeItemsClass) {
    if (typeof window !== 'undefined') {
        const buttonsArray = Array.isArray(buttons) ? buttons : [buttons];

        buttonsArray.forEach(btn => {
            document.getElementById(btn).addEventListener('click', (event) => {
                const targetItem = document.querySelector(item);
                targetItem.classList.toggle(className);

                if (removeItems && removeItems.length > 0) {
                    removeItems.forEach(selector => {
                        document.querySelector(selector).classList.remove(removeItemsClass);
                    });
                }

                // إضافة حدث لإغلاق العنصر عند الضغط خارج العنصر
                const closeOnOutsideClick = (e) => {
                    if (!targetItem.contains(e.target) && !buttonsArray.some(button => document.getElementById(button).contains(e.target))) {
                        targetItem.classList.remove(className);
                        document.removeEventListener('click', closeOnOutsideClick); // إزالة الحدث بعد الإغلاق
                    }
                };

                document.addEventListener('click', closeOnOutsideClick);

                if (closeBtn) {
                    document.querySelector(closeBtn).addEventListener('click', () => {
                        targetItem.classList.remove(className);
                        console.log('close');
                        document.removeEventListener('click', closeOnOutsideClick); // إزالة الحدث عند الإغلاق
                    });
                }
            });
        });
    }
}

export function openSearchInput(btn, item, className, closeBtn = null, removeItems = [], removeItemsClass) {
    if (typeof window !== 'undefined') {
        document.getElementById(btn).addEventListener('click', (event) => {
            const targetItem = document.querySelector(item);
            targetItem.classList.add(className);

            if (removeItems && removeItems.length > 0) {
                removeItems.forEach(selector => {
                    document.querySelector(selector).classList.remove(removeItemsClass);
                });
            }

            // إضافة حدث لإغلاق العنصر عند الضغط خارج العنصر
            const closeOnOutsideClick = (e) => {
                if (!targetItem.contains(e.target) && e.target.id !== btn) {
                    targetItem.classList.remove(className);
                    document.removeEventListener('click', closeOnOutsideClick); // إزالة الحدث بعد الإغلاق
                }
            };

            document.addEventListener('click', closeOnOutsideClick);

            if (closeBtn) {
                document.querySelector(closeBtn).addEventListener('click', () => {
                    targetItem.classList.remove(className);
                    console.log('close');
                    document.removeEventListener('click', closeOnOutsideClick); // إزالة الحدث عند الإغلاق
                });
            }
        });
    }
}