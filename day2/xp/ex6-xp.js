// 1. 
const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// 2. 
const ul = navBar.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Logout';
ul.appendChild(newLi);

// 3.
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log('First link:', firstLi.textContent);
console.log('Last link:', lastLi.textContent);