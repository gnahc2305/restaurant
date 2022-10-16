export default function createContact() {
    const containerContact = document.createElement('div')
    containerContact.classList.add('container-contact');

    let p1 = document.createElement('h3');
    p1.textContent = 'Phone: 999 999 999';

    let p2 = document.createElement('h3');
    p2.textContent = 'Email: restaurant@restaurant.com999';

    let p3 = document.createElement('h3');
    p3.textContent = 'Av. #### #### 23';

    containerContact.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23586.604562356224!2d-71.09399652089841!3d42.35690040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370833d39ae7b%3A0xac4c2511aaa548ff!2sMcDonald&#39;s!5e0!3m2!1ses!2sus!4v1665893390634!5m2!1ses!2sus" width="400" height="300" style="border:0; padding-top:20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    
    containerContact.appendChild(p1);
    containerContact.appendChild(p2);
    containerContact.appendChild(p3);

    content.appendChild(containerContact);
}