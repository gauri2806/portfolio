const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close'),
    navLink=document.querySelectorAll('.nav__link');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

function linkAcion() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAcion))


// skills

const skillsContent= document.getElementsByClassName('skills__content'),
    skillsHeader= document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass= this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close'
    }
    if(itemClass==='skills__content skills__close'){
        this.parentNode.className= 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})


// Qualifications 

const tabs= document.querySelectorAll('[data-target]'),
    tabContents= document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target= document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


// Dark Light Theme 

const themeButton= document.getElementById('theme__button'),
    darkTheme= 'dark__theme',
    iconTheme= 'uil-sun';
const selectedTheme= localStorage.getItem('selected__theme'),
    selectedIcon= localStorage.getItem('selected__icon');
const getCurrentTheme= ()=> document.body.classList.contains(darkTheme)? 'dark' : 'light';
const getCurrentIcon= ()=> themeButton.classList.contains(iconTheme)? 'uil-moon' : 'uil-sun';

if(selectedTheme){
    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon'? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected__theme', getCurrentTheme())
    localStorage.setItem('selected__icon', getCurrentIcon())
})