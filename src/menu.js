import bakedpasta from './img/baked-pasta.jpeg'
import Pizza from './img/pizza.jpg';

function createMenu() {
    const containerMenu = document.createElement('div');
    containerMenu.classList.add('container-menu');
    
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = 'Classic Pizza 10$';
    p2.textContent = 'Pasta 8$';

    containerMenu.appendChild(p1);
    containerMenu.appendChild(p2);
    
    
    content.appendChild(containerMenu);
    
    const bakedPasta = new Image();
    bakedPasta.src = bakedpasta;
    bakedPasta.classList.add('bakedpasta');
    
    const pizza = new Image();
    pizza.src = Pizza;
    pizza.classList.add('pizza');
    
    
    containerMenu.appendChild(bakedPasta);
    containerMenu.appendChild(pizza);
    
}

export { createMenu } 