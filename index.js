import { getAllUsers, getUser ,postUser, patchUser, deleteUser, user_post  } from './src/js/dbUsers.js';
import { getPost, getEdit, getAllPost, post, patchPost, deletePost } from './src/js/dbPosts.js';

const articles = document.querySelector('#articles');
const busqueda = document.querySelector('#button-addon2')
const CrearPost = document.querySelector('#BtnCrearPost')
const perfill = document.querySelector('#imagenPerfill')
const url = new URLSearchParams(window.location.search);
const id = url.get('id')

getAllPost('', articles, false, false, '')

articles.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click')
    if(event.target.id){
        console.log(event.target.id)
        window.location.href = `./src/article.html?id=${id}&post=${event.target.id}`
    }
})

busqueda.addEventListener('click', (event) => {
    event.preventDefault();
    const searchMain = document.querySelector('#searchMain');
    getAllPost('', articles, false, true, searchMain.value)
})

CrearPost.addEventListener('click', (event) => {
    window.location.href = `./src/crearPost.html?id=${id}`
})

