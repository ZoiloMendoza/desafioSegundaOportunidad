import { card, contenido } from './card.js'

const urlFirebase = 'https://segundaoportunidad-eab4a-default-rtdb.firebaseio.com'
//const urlFirebase = 'https://<dominio>/api/v1' //
const urlPostMan = 'http://localhost:3000/api/v1/users'
const urlPostMan2 = 'http://localhost:3000/api/v1/posts'


const parseInfo = (info) => {
    const list = Object.entries(info);
    const newList = list.map((elemento) => {
        const infoParsed = {
            id: elemento[0],
            ...elemento[1],
        }
        return infoParsed
    })
    return newList;
}

const tiempoTranscurrido = (createdAt) =>{
    const ahora = new Date().getTime();
    const diferenciaMilisegundos = ahora - createdAt;
    const minutos = Math.floor(diferenciaMilisegundos/60000);
    const horas = Math.floor(minutos/60)
    const dias = Math.floor(horas/24)
    if(minutos < 60){
        return `${minutos} min read`
    }else if(horas < 24 && horas > 1){
        return `${horas} hour read`
    }
    else if(horas > 24){
        return `${dias} day read`
    }
}

const filtrado = (arreglo, palabraClave) => {
    return arreglo.filter( objeto => objeto.floatingTextarea.includes(palabraClave))
}

const get = async (contenedor,id) => {
    try {
        let response = await fetch(`${urlFirebase}/${id}.json`) //
        const result = await response.json();
        const difTiempo = tiempoTranscurrido(result.createdAt)
        contenedor.appendChild(card(result, difTiempo,contenido(result)))
    } catch (error) {
        console.log('get', error);
    }
}

const getEdit = async (form,id) => {
    try {
        let response = await fetch(`${urlFirebase}/${id}.json`)
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

const getAll = async (contenedor, boolean, palabraClave) => {
    try {

        let response = await fetch(urlPostMan)// ('urlFirebase/posts')
        const result = await response.json();
        const data = parseInfo(result);
        console.log(data)

        /*if(boolean){
            data.forEach((personaje) => {
                const difTiempo = tiempoTranscurrido(personaje.createdAt)
                contenedor.insertAdjacentElement("afterbegin", card(personaje, difTiempo,contenido('')));
             })
        }else if(!boolean){
            let fil = filtrado(Array.from(data), palabraClave)
            console.log(fil)
            contenedor.innerHTML='';
            fil.forEach((personaje) => {
                const difTiempo = tiempoTranscurrido(personaje.createdAt)
                contenedor.insertAdjacentElement("afterbegin", card(personaje, difTiempo,contenido('')));
             })
        }*/
    } catch (error) {
        console.log('get', error);
    }
}

const post = async (formulario) => {
    try {
        const response = await fetch(urlPostMan2,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(formulario),
        });
    } catch (error) {
        console.log('post:', error)
    }
}

const patch = async (persona,id) => {
    try {
        const response = await fetch(`${urlFirebase}/${id}.json`,{
        method: 'PATCH',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify({
            floatingTextarea: persona.floatingTextarea,
            floatingTextarea2: persona.floatingTextarea2,
            urlImagenPrincipal: persona.urlImagenPrincipal
        })
        })

    } catch (error) {
        console.log('patch:', error)
    }
}

const del = async (id) => {
    try {
        const response = await fetch(`${urlFirebase}/${id}.json`,{
        method: 'DELETE',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        });
    } catch (error) {
        console.log('delete:', error)
    }
}
export { get, getEdit ,getAll, post, patch, del }