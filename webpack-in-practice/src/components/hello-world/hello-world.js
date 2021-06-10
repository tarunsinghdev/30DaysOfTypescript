import './styles.css';

function hello() {
  console.log('Hello from Webpack!');

  const body = document.querySelector('body');
  const subHeading = document.createElement('h3');
  subHeading.innerHTML = 'Hello from Webpack!';
  subHeading.classList.add('content');
  body.append(subHeading);

  // Babel Input: ES2015 arrow function
  const arr = [1, 2, 3].map((n) => n + 1); //gets transpiled to older syntax
  console.log(arr);
}
export default hello;
