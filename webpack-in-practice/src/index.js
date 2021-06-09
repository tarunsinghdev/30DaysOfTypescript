import helloWorld from './hello-world.js';
import addImage from './add-image.js';
import './style.css';

const mainHeading = document.querySelector('h2');
mainHeading.classList.add('main-heading');

helloWorld();
addImage();
