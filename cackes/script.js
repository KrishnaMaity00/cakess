const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-log-denai');
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
    })
})

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})

