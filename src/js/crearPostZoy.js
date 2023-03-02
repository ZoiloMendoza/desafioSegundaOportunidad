import { get, getEdit ,getAll, post, patch, del } from './firebase.js';

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
    
const newObjeto = {
      title:'clase',
      content:'78787984994',
      likes: 2,
      comments: [],
      author: '640018f9a6203dd421ca4ac0'
      }
    if(true){
        post(newObjeto);
        alert('se creó correctamente',window.location.href = `../index.html`)
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});