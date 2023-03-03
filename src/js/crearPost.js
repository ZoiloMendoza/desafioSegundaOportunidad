import { getPost ,getAllPost, post, patchPost, deletePost } from './dbPosts.js';

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');
const url = new URLSearchParams(window.location.search);
const id = url.get('id')
//createdAt: `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`,
//        hoursAndMinutes: `${now.getHours()}:${now.getMinutes()}`

const validacion = ({title, content, author}) => {
    let objeto = {title, content, author};
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

publish.addEventListener('click', (event) => {
    event.preventDefault();
    //const now = new Date()
    //let objetoPost = {
    //    createdAt: now.getTime()
    //};
    let objetoPost = {
        likes: 0,
        comments: [],
        author: id,
    }
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    console.log(objetoPost)
    if(validacion(objetoPost)){
        post(objetoPost);
        alert('se creó correctamente',window.location.href = `../index.html?id=${id}`)
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});