import Image from './image.png';

function addImage() {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.src = Image;
  img.alt = 'corona';
  body.append(img);
}

export default addImage;
