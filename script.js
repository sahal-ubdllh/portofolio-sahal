// absolute top-14 w-full left-0 bg-slate-800 divide-gray-900 divide-y-2
const menu = document.querySelector('.menu');
const hamburgerMenu =document.querySelector('.hamburger-menu');


menu.addEventListener('click', displayMenu);
hamburgerMenu.addEventListener('click',displayMenu);

const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

iconBars.style.display = 'inline';
iconClose.style.display = 'none';



function displayMenu() {
    if(menu.classList.contains('absolute')){
        menu.classList.add('hidden');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';

        menu.classList.remove('absolute');
        menu.classList.remove('top-17');
        menu.classList.remove('w-1/2');
        menu.classList.remove('right-0');
        menu.classList.remove('bg-slate-800');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2');
        menu.classList.remove('rounded-lg');
        menu.classList.remove('shadow-lg');
        menu.classList.remove('shadow-gray-900/10');
    }else{
        menu.classList.remove('hidden');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';

        menu.classList.add('absolute');
        menu.classList.add('top-18');
        menu.classList.add('w-1/2');
        menu.classList.add('right-8');
        // menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-400');
        menu.classList.add('divide-y-2');
        menu.classList.add('rounded-lg');
        menu.classList.add('shadow-lg');
        menu.classList.add('shadow-gray-900/10');
    }
}