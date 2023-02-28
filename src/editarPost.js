import { get, getEdit ,getAll, post, put, del } from './js/firebase.js';

const form = document.querySelectorAll('textarea,input');
const url = new URLSearchParams(window.location.search);
const id = url.get('persona')

getEdit(form, id)