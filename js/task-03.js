const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl= document.querySelector('.gallery');
const galleryItems = images.reduce((str, img) => str += `<li class="gallery__item"> <img class="gallery__img" src="${img.url}" alt = "${img.alt}"> </li>`, '');
galleryEl.insertAdjacentHTML('afterbegin', galleryItems);


// // Налаштуваня висоти за найменшою картинкою
function setEqualHeight(selector) {
  const heights = [];
  const elements = document.querySelectorAll(selector);
  elements.forEach(item => heights.push(item.offsetHeight));
  elements.forEach(item => item.style.height = Math.min(...heights)+"px");
}

setEqualHeight('.gallery__img');