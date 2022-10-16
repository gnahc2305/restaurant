import './style.css'
import { createHeader, createContainer, createFooter} from './home';{}
import { createMenu } from './menu';
import createContact from './contact';

createHeader();
createFooter();
createContainer();


const home_btn = document.querySelector('.home');
const menu_btn = document.querySelector('.menu');
const contact_btn = document.querySelector('.contact');

function checkIfDivExists() {
    if (document.querySelector('.container') != null) {
        document.querySelector('.container').remove();
    } else if (document.querySelector('.container-menu') != null) {
        document.querySelector('.container-menu').remove();
    } else if (document.querySelector('.container-contact') != null) {
        document.querySelector('.container-contact').remove();
    }
}

home_btn.addEventListener('click', () => {
    checkIfDivExists();
    createContainer();
})

menu_btn.addEventListener('click', () => {
    checkIfDivExists();
    createMenu();
})

contact_btn.addEventListener('click', () => {
    checkIfDivExists();
    createContact()
})