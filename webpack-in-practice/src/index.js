import helloWorld from './components/hello-world/hello-world.js';
import addImage from './components/add-image/add-image.js';
import './style.css';

const body = document.querySelector('body');
body.style.textAlign = 'center';

const mainHeading = document.createElement('h2');
mainHeading.innerHTML = 'Webpack 5';
mainHeading.classList.add('main-heading');
body.append(mainHeading);

helloWorld();
addImage();
