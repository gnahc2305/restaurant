import image from './img/pasta.jpg'

function createHeader() {
    const header_div = document.createElement('div');
    header_div.classList.add('header');

    
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    
    header_div.appendChild(title);


    const navbar = document.createElement('ul');
    const list1 = document.createElement('li');
    list1.classList.add('home');
    list1.textContent = 'Home'
    const list2 = document.createElement('li');
    list2.classList.add('menu');
    list2.textContent = 'Menu'
    const list3 = document.createElement('li');
    list3.classList.add('contact');
    list3.textContent = 'Contact Us'
    
    header_div.appendChild(navbar);
    navbar.appendChild(list1);
    navbar.appendChild(list2);
    navbar.appendChild(list3);

    content.appendChild(header_div);
}


function createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');

    let p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime maiores tempora numquam deserunt ullam quidem veritatis atque dicta est asperiores consectetur minus, ut eaque corrupti inventore? Unde, animi ut?'

    container.appendChild(p)


    const myImage = new Image();
    myImage.src = image;    

    container.appendChild(myImage);

    content.appendChild(container);
}


function createFooter() {
    const footer = document.createElement('footer');
    const a = document.createElement('a');

    a.textContent = 'By: Andres Chang';
    a.href = 'https://github.com/gnahc2305/restaurant'

    footer.appendChild(a);
    content.appendChild(footer);
}

export { createHeader, createContainer, createFooter }