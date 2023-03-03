import { getEdit,getAllPost, post, patchPost, deletePost } from './dbPosts.js'

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');

const url = new URLSearchParams(window.location.search);
const idPost = url.get('post')
const idUser = url.get('id');


getEdit(form, idPost)

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
    console.log(idPost)
    if(validacion(objetoPost)){
        patchPost(objetoPost, idPost);
        console.log('ok')
        alert('se actualizó correctamente',window.location.href = `../index.html?id=${idUser}`)
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});