import image from './pasta.jpg'

export default function createContainer() {
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