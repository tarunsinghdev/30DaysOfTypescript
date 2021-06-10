import helloWorld from './components/hello-world/hello-world.js';
import addImage from './components/add-image/add-image.js';
import './style.css';

const mainHeading = document.querySelector('h2');
mainHeading.classList.add('main-heading');

helloWorld();
addImage();
