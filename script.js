const lampara = document.querySelector('#lampara');
const body = document.querySelector('body');

lampara.addEventListener('click', e =>{
    body.classList.toggle('modo_oscuro');
    });