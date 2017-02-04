function component () {
  var element = document.createElement('div');
  element.innerHTML = 'Hello from webpack!! with JSX';
  return element;
}
console.log('Hello World!');
document.body.appendChild(component());