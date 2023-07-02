const brgMenu = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile-navbar');
const headerItem = document.querySelectorAll('.services-section__list-item');
const mainContent = document.querySelectorAll('.services-slider--width');


brgMenu.addEventListener('click', () => {
    mobMenu.classList.toggle('mobile-navbar--open');
});

for (let item of headerItem){
    item.addEventListener('click',function(){
        for(let element of mainContent){
            element.classList.add('services-slider--hidden')

        }
        const content=document.querySelector('#' + item.dataset.tab);
        content.classList.remove('services-slider--hidden')

    })
    
}