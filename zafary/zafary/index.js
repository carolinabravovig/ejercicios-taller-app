const boton1 =window.document.querySelector('#boton1');
boton1.addEventListener('click',mostrarBoton1);
document.getElementById('titulo2').innerHTML = 'Zafary';

function mostrarBoton1(){
    const contenido =window.document.querySelector('#url');
    document.getElementById('titulo2').innerHTML = 'Zafary';
    contenido.setAttribute('src','../home/index.html');

}
const boton2 =window.document.querySelector('#boton2');
boton2.addEventListener('click',mostrarBoton2);
function mostrarBoton2(){
    const contenido =window.document.querySelector('#url');
    contenido.setAttribute('src','../whatzapp/index.html');
    document.getElementById('titulo2').innerHTML = 'Whatzapp';

}
const boton3 =window.document.querySelector('#boton3');
boton3.addEventListener('click',mostrarBoton3);

function mostrarBoton3(){
    const contenido =window.document.querySelector('#url');
    contenido.setAttribute('src','../Zpotify/index.html');
    document.getElementById('titulo2').innerHTML = 'Zpotify';
}