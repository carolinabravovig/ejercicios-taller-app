const btn =window.document.querySelector('#submit');
btn.addEventListener('click',validacion);
function validacion(){
   const direccion =window.document.querySelector('#correo');
   const password=window.document.querySelector('#passwd');
    const direc=direccion.value;
    const pass=password.value;
    direccion.focus();
    direccion.value='';
    password.value='';

if (direc ==='ejemplo@gmail.com' && pass ==='123456'){
 
        console.log('Iniciando Sesion')
}else{
    console.log('Email y/o contraseña incorrecta')
}

}