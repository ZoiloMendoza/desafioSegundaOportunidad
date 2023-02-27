import { get, getAll, post, put, del } from './src/js/firebase.js';

const BtnCrearPost = document.querySelector('#BtnCrearPost');
const articles = document.querySelector('#articles');

getAll(articles)

console.log('ok')