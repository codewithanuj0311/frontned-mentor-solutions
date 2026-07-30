'use strict'

const shareBtn = document.querySelector('.share-btn');
const shareToast = document.querySelector('.share-toast');


shareBtn.addEventListener('click', ()=> {
    shareToast.classList.toggle('active');
    shareBtn.classList.toggle('active');
})