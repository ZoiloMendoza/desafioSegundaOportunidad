const post = async (objeto)=>{
    try {
        const response = await fetch('https://kodemia23-default-rtdb.firebaseio.com/.json',{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(objeto),
        });
    } catch (error) {
        console.log('post:', error)
    }
}
export{post}