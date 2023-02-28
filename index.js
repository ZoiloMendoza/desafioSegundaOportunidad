import { get, getAll, post, put, del } from './src/js/firebase.js';

const BtnCrearPost = document.querySelector('#BtnCrearPost');
const articles = document.querySelector('#articles');



getAll(articles)


articles.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.id.includes('-N')){
        window.location.href = `./article.html?persona=${event.target.id}`
    }
})
console.log('ok')