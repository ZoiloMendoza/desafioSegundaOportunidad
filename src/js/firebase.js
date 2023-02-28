import { card, contenido } from './card.js'

const urlFirebase = 'https://segundaoportunidad-eab4a-default-rtdb.firebaseio.com'

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

const get = async (contenedor,id) => {
    try {
        let response = await fetch(`${urlFirebase}/${id}.json`)
        const result = await response.json();
        contenedor.innerHTML = '';
        console.log(result )
        contenedor.appendChild(card(result, '1',contenido(result)))
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

const getAll = async (contenedor) => {
    try {
    
        const tiempoTranscurrido = (createdAt) =>{
            const ahora = new Date().getTime();
            const diferenciaMilisegundos = ahora - createdAt;
            const minutos = Math.floor(diferenciaMilisegundos/60000);
            return minutos;
        }
        
        let response = await fetch(`${urlFirebase}/.json`)
        const result = await response.json();
        const data = parseInfo(result);
        contenedor.innerHTML = '';
        data.forEach((personaje) => {
           const difTiempo = tiempoTranscurrido(personaje.createdAt)
           contenedor.appendChild(card(personaje, difTiempo,contenido('')))
        })
    } catch (error) {
        console.log('get', error);
    }
}

const post = async (formulario,contenedor) => {
    try {
        const response = await fetch(`${urlFirebase}/.json`,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(formulario),
        });
        //getAll(contenedor)
    } catch (error) {
        console.log('post:', error)
    }
}

const put = async (persona,id) => {
    try {
        const response = await fetch(`${urlFirebase}/${id}.json`,{
        method: 'PUT',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify({
            firstName: persona.firstName,
            lastName: persona.lastName,
            matter: persona.matter,
            average: persona.average
        }),
        });
    } catch (error) {
        console.log('put:', error)
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
export { get, getEdit ,getAll, post, put, del }