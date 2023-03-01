import { get, getAll, post, patch, del } from './src/js/firebase.js';

const articles = document.querySelector('#articles');

getAll(articles)

articles.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.id.includes('-N')){
        window.location.href = `./src/article.html?persona=${event.target.id}`
    }
})
