let masInfo_btn = document.getElementById('masInfo_btn');
let masInfo = document.getElementById('masInfo');

masInfo_btn.addEventListener('click', mostrarInfo);

function mostrarInfo(){
    masInfo.classList.toggle('mostrar_texto');
    css.classList.toggle('mostrar_texto');
    js.classList.toggle('mostrar_texto');
    pa.classList.toggle('mostrar_texto');
    up.classList.toggle('mostrar_texto');
}