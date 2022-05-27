// Import stylesheets
import './style.css';

// Write Javascript code!
var store = '';

function test() {
  // console.log('hello');
  var getTextbox = document.getElementById('nameText');
  console.log(getTextbox.value);

  var getDisplay = document.getElementById('display');
  getDisplay.innerHTML = getTextbox.value;

  getTextbox.value = '';
}

console.log('hello');

const btn = document.getElementById('getbtn');

btn.addEventListener('click', test);
