import { get, getAll, post, put, del } from './js/firebase.js';

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');


const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

publish.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoPost = {};
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    if(validacion(objetoPost)){
        post(objetoPost);
        console.log('ok')
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});