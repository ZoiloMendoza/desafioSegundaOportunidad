import { getPost, getEdit,getAllPost, post, patchPost, deletePost } from './dbPosts.js';

const columnaCentral = document.querySelector('#columnaCentral');
const editarPost = document.querySelector('#editarPost')
const eliminarPost = document.querySelector('#eliminarPost')
const url = new URLSearchParams(window.location.search);
const idPost = url.get('post')
const idUser = url.get('id')

getPost(columnaCentral,idPost)

editarPost.addEventListener('click', (event) => {
    event.preventDefault();
    if(idPost){
        window.location.href = `./editarPost.html?id=${idUser}&post=${idPost}`
    }
})

eliminarPost.addEventListener('click', (event) => {
    event.preventDefault();
    if(idPost){
        deletePost(idPost)
        alert('Se ha borrado correctamente',window.location.href = `/index.html?id=${idUser}`);
    }
})