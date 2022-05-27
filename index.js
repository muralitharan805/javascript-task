// Import stylesheets
import './style.css';

// Write Javascript code!
var store = [];

function test() {
  // console.log('hello');
  var getTextbox = document.getElementById('nameText');
  console.log(getTextbox.value);

  store.push(getTextbox.value);

  const element = document.getElementById('display');
  element.innerHTML = '';
  for (var i = 0; i < store.length; i++) {
    const para = document.createElement('p');
    const node = document.createTextNode(store[i]);
    para.appendChild(node);
    element.appendChild(para);
  }

  getTextbox.value = '';

  console.log(store);
}

console.log('hello');

const btn = document.getElementById('getbtn');

btn.addEventListener('click', test);

const getclrbtn = document.getElementById('getclrbtn');

getclrbtn.addEventListener('click', getclrbtnfn);

function getclrbtnfn() {
  store = [];
  const element = document.getElementById('display');
  element.innerHTML = '';
}
