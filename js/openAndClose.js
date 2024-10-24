export function openAndClose(btn,item,className,closeBtn=null,removeItems=[],removeItemsClass){
    document.getElementById(btn).addEventListener('click',()=>{
        document.querySelector(item).classList.toggle(className)

         if (removeItems && removeItems.length > 0) {

            removeItems.forEach(selector => {
                document.querySelector(selector).classList.remove(removeItemsClass);
            });
        }

    if(closeBtn){
    document.querySelector(closeBtn).addEventListener('click',()=>{
        document.querySelector(item).classList.remove(className)
        console.log('close')
    })
}
    })}
export function openSearchInput(btn,item,className,closeBtn=null,removeItems=[],removeItemsClass){
    document.getElementById(btn).addEventListener('click',()=>{
        document.querySelector(item).classList.add(className)

            if (removeItems && removeItems.length > 0) {

            removeItems.forEach(selector => {
                document.querySelector(selector).classList.remove(removeItemsClass);
            });
        }

    if(closeBtn){
    document.querySelector(closeBtn).addEventListener('click',()=>{
        document.querySelector(item).classList.remove(className)
        console.log('close')
    })
}
    }
)
}