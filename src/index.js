import './style.css'
import image from './pasta.jpg'

const myImage = new Image();
myImage.src = image;

document.querySelector('.container').appendChild(myImage);


// const content = document.getElementById('content');

// const header_div = document.createElement('div');
// header_div.classList.add('header');

// const title = document.createElement('h1');
// title.textContent = 'Restaurant';

// header_div.appendChild(title);

// const navbar = document.createElement('ul');
// const list1 = document.createElement('li');
// list1.textContent = 'Home'
// const list2 = document.createElement('li');
// list2.textContent = 'Menu'
// const list3 = document.createElement('li');
// list3.textContent = 'Contact Us'

// header_div.appendChild(navbar);
// navbar.appendChild(list1);
// navbar.appendChild(list2);
// navbar.appendChild(list3);


// content.appendChild(header_div);