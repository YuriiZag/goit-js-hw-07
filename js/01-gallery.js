import { galleryItems } from './gallery-items.js';





// Change code below this line

let instance = {}

const galleryContainerRef = document.querySelector(".gallery");



galleryContainerRef.addEventListener('click', delegation);

document.addEventListener('keydown', modalCloseByKeyboard);


const gallerylist = galleryItems.map(item => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('gallery__item');
    
    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery__link');
    
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = `${item.preview}`;
    image.alt = `${item.description}`;
    image.setAttribute('data-source', `${item.original}`);

    imageLink.append(image);
    imageItem.append(imageLink);

    return imageItem;
});

galleryContainerRef.append(...gallerylist);

function delegation(e) {
    if (e.target.nodeName === 'IMG') {
        e.target.src = e.target.getAttribute('data-source');
       
        instance = basicLightbox.create(`
            <div class="modal">
                <img src= ${e.target.src} alt=${e.target.alt}>
            </div>
        `)
        return instance.show();
    }
}

function modalCloseByKeyboard(e) {
    
    if (e.code === 'Escape' && basicLightbox.visible) {
        console.log(e)
        return instance.close();
    }
}



