import { card, contenido } from './card.js'
import { getAllUsers, getUser ,postUser, patchUser, deleteUser, user_post  } from './dbUsers.js'
const urlPost = 'http://localhost:3000/api/v1/posts'

const filtrado = (arreglo, palabraClave) => {
    return arreglo.filter( objeto => objeto.title.toLowerCase().includes(palabraClave.toLowerCase()))
}

const getPost = async (contenedor, id) => {
    try {
        const response = await fetch(`${urlPost}/${id}`)
        const result = await response.json();
        console.log(result)
        const ejemplo = await getUser(result.author);
        contenedor.appendChild(card(result,contenido(result),ejemplo))
    } catch (error) {
        console.log('getPost', error);
    }
}

const getEdit = async (form,id) => {
    try {
        let response = await fetch(`${urlPost}/${id}`)
        const result = await response.json();
        Object.entries(result)
        Array.from(form).forEach((elemento) =>{
            Object.entries(result).forEach((ele) =>{
            if(elemento.name === ele[0]){
              elemento.value = ele[1];
                }
            })
           })
    } catch (error) {
        console.log('get', error);
    }
}


const getAllPost = async (email, contenedor, boolean, trueSearch, search) => {
    try {
        let response = await fetch(urlPost)// ('urlFirebase/posts')
        const result = await response.json();
        if(boolean){
        const id_userCreado = await user_post(email)
        console.log(id_userCreado)
        window.location.href = `/index.html?id=${id_userCreado}`
        }
        if(!boolean && !trueSearch){
        result.forEach(async (posteo) => {
            const ejemplo = await getUser(posteo.author);
            contenedor.insertAdjacentElement("afterbegin", card(posteo,contenido(''),ejemplo));
         })
        }
        if(trueSearch){
            contenedor.innerHTML = '';
            let fil = filtrado(Array.from(result), search)
            fil.forEach(async (posteo) => {
                const ejemplo = await getUser(posteo.author);
                contenedor.insertAdjacentElement("afterbegin", card(posteo,contenido(''),ejemplo));
             })
        }
    } catch (error) {
        console.log('get', error);
    }
}

const post = async (formulario) => {
    try {
        const response = await fetch(urlPost,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(formulario),
        });
    } catch (error) {
        console.log('post:', error)
    }
}

const patchPost = async (cambiosPost,id) => {
    try {
        const response = await fetch(`${urlPost}/${id}`,{
        method: 'PATCH',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(cambiosPost)
        })
        console.log('hola soy patch')
    } catch (error) {
        console.log('patchPost:', error)
    }
}

const deletePost = async (id) => {
    try {
        const response = await fetch(`${urlPost}/${id}`,{
        method: 'DELETE',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        });
    } catch (error) {
        console.log('deleteUser:', error)
    }
}
export { getPost, getEdit,getAllPost, post, patchPost, deletePost }