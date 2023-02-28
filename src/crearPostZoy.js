import { get, getEdit ,getAll, post, put, del } from './js/firebase.js';

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');

//createdAt: `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`,
//        hoursAndMinutes: `${now.getHours()}:${now.getMinutes()}`

const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}


publish.addEventListener('click', (event) => {
    event.preventDefault();
    const now = new Date()
    let objetoPost = {
        createdAt: now.getTime()
    };
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    if(validacion(objetoPost)){
        console.log(objetoPost)
        post(objetoPost);
        console.log('ok')
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});