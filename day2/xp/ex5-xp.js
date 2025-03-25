// 1. 
const container = document.getElementById('container');
console.log(container);

// 2.
document.querySelectorAll('li')[1].textContent = 'Richard';

// 3.
const secondUl = document.querySelectorAll('ul')[1];
secondUl.removeChild(secondUl.children[1]);

// 4.
const firstLis = document.querySelectorAll('ul > li:first-child');
firstLis.forEach(li => li.textContent = 'MonNom');

// 5.
const uls = document.querySelectorAll('ul');
uls.forEach(ul => ul.classList.add('student_list'));
uls[0].classList.add('university', 'attendance');

// 6. 
container.style.backgroundColor = 'lightblue';
container.style.padding = '10px';

// 7. 
document.querySelectorAll('li')[3].style.display = 'none';

// 8. 
document.querySelectorAll('li')[1].style.border = '1px solid black';

// 9. 
document.body.style.fontSize = '16px';

// Bonus
if (container.style.backgroundColor === 'lightblue') {
  const users = Array.from(container.parentNode.querySelectorAll('li'))
    .map(li => li.textContent)
    .filter(name => name !== 'Dan' && name !== 'MonNom');
  alert(`Bonjour ${users[0]} et ${users[1]}`);
}