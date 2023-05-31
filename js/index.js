import {db} from './db.js';

let setYear = () => {
 const year = document.querySelector('.year');
 year.textContent = new Date().getFullYear();
}
console.log(db);
const container = document.querySelector('section.blog');
db.forEach((day)=> {
 const div = document.createElement('div');
 const header = document.createElement('h3');
 header.appendChild(document.createTextNode(`Day#${day['dayNumber']}: ${day['dayStr']}`));
 const paragraph = document.createElement('p');
 paragraph.appendChild(document.createTextNode(day['description']));
 const strong = document.createElement('strong');
 strong.appendChild(document.createTextNode('Thoughts: '));
 const thoughts = document.createElement('p');
 thoughts.appendChild(strong);
 thoughts.appendChild(document.createTextNode(day['thoughts']));
 
 
 div.appendChild(header);
 div.appendChild(paragraph);
 div.appendChild(thoughts);
 
 if(day['link']) {
  const link = document.createElement('a');
  link.setAttribute('href', day['link']);
  link.appendChild(document.createTextNode('Link'));
  div.appendChild(link);
 }
 
 container.appendChild(div);
})


setYear();

