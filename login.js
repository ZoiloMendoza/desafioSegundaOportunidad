import { getAllPost } from "./src/js/dbPosts.js";
import { getAllUsers, getUser ,postUser, patchUser, deleteUser, user_post } from "./src/js/dbUsers.js";
export { getPost, getEdit,getAllPost, post, patchPost, deletePost } from "./src/js/dbPosts.js"
const new_user = document.querySelectorAll('#new_user input')
const form = document.querySelector('form');
const Continue_user = document.querySelector('#Continue');

const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

Continue_user.addEventListener('click', (event) => {
    event.preventDefault();
    let user = {
        posts: [],
        comments: [],
    };
    new_user.forEach((elemento) =>{
        user[elemento.name] = elemento.value;
    });
    
    if(validacion(user)){
        postUser(user);
        form.reset();
        getAllPost(user.email, '',true)
        //window.location.href = `./index.html?email=${user.email}`
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
});