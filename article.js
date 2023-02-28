import { get, getEdit ,getAll, post, put, del } from './src/js/firebase.js';

const columnaCentral = document.querySelector('#columnaCentral');
const editarPost = document.querySelector('#editarPost')
const url = new URLSearchParams(window.location.search);
const id = url.get('persona')
console.log(id)
get(columnaCentral, id)

editarPost.addEventListener('click', (event) => {
    event.preventDefault();
    if(id.includes('-N')){
        window.location.href = `./src/editarPost.html?persona=${id}`
    }
})