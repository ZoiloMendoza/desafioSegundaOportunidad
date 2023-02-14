import { post } from "./post.js";

const form = document.querySelectorAll('form input');
const boton = document.querySelector('#btn_enviar');

const crearObjeto = ()=>{
    let objeto = {}
    form.forEach(element => { 
    objeto[element.name] = element.value      
        }); 
        return objeto
}
boton.addEventListener('click', ()=>{
    // console.log(crearObjeto());
    post(crearObjeto())
})

