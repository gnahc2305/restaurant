export default function createHeader() {
    const header_div = document.createElement('div');
    header_div.classList.add('header');

    
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    
    header_div.appendChild(title);


    const navbar = document.createElement('ul');
    const list1 = document.createElement('li');
    const link1 = document.createElement('a');
    link1.textContent = 'Home'
    link1.href = 'https://github.com/gnahc2305/restaurant'
    const list2 = document.createElement('li');
    list2.textContent = 'Menu'
    const list3 = document.createElement('li');
    list3.textContent = 'Contact Us'
    
    header_div.appendChild(navbar);
    navbar.appendChild(list1);
    list1.appendChild(link1);
    navbar.appendChild(list2);
    navbar.appendChild(list3);

    content.appendChild(header_div);
}