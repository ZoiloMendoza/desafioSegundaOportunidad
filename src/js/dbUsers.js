

const urlUsers = 'http://localhost:3000/api/v1/users';

let userloger = (email, result) => {
    let id = '';
    result.forEach((usuario) => {
        if(usuario.email === email){
            id = usuario._id;
        }
    });
    return id;
}

const user_post = async (email) => {//hace un getAll de usuarios y regresa 1
    try {
        const response = await fetch(urlUsers)
        const result = await response.json();
        return userloger(email, result)
    } catch (error) {
        console.log('user_post:', error);
    }
}

const getAllUsers = async () => {
    try {
        const response = await fetch(urlUsers)
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.log('getAllUsers:', error);
    }
}

const getUser = async (id) => {
    try {
        const response = await fetch(`${urlUsers}/${id}`) //
        const result = await response.json();
        return result
        
    } catch (error) {
        console.log('getUser', error);
    }
}

const postUser = async (usuario) => {
    try {
        const response = await fetch(urlUsers,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(usuario),
        });
    } catch (error) {
        console.log('postUser:', error)
    }
}

const patchUser = async (cambiosUser,id) => {
    try {
        const response = await fetch(`${urlUsers}/${id}}`,{
        method: 'PATCH',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(cambiosUser)
        })
    } catch (error) {
        console.log('patch:', error)
    }
}

const deleteUser = async (id) => {
    try {
        const response = await fetch(`${urlUsers}/${id}`,{
        method: 'DELETE',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        });
    } catch (error) {
        console.log('deleteUser:', error)
    }
}

export { getAllUsers, getUser ,postUser, patchUser, deleteUser, user_post  }