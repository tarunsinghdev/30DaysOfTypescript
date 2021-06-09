function hello() {
  console.log('Hello from Webpack!');

  // Babel Input: ES2015 arrow function
  const arr = [1, 2, 3].map((n) => n + 1);
  console.log(arr);
}
export default hello;
