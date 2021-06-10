import Image from './image.png';

const addImage = () => {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.src = Image;
  img.alt = 'corona';
  img.style.margin = '0 auto';
  img.style.display = 'block';
  body.append(img);
};

export default addImage;
