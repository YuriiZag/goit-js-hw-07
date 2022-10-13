import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");



const gallerylist = galleryItems.map(item => {

    
    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery__link');
    imageLink.href = `${item.original}`;
    
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = `${item.preview}`;
    image.title = `${item.description}`;
    image.alt = `${item.description}`;

    imageLink.append(image);


    return imageLink;
});


galleryContainerRef.append(...gallerylist);

const gallery = new SimpleLightbox('.gallery a' ,{captionsData: 'alt',captionsDelay: '250s'});


 

