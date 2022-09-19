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

const galleryEl = document.querySelector('.gallery');
const galleryItems = images.reduce((str, img, i) =>
  str += `<li> <img class="gallery__img" src="${img.url}" alt = "${img.alt}" height = "${setEqualHeights()}"> </li>`, '');
galleryEl.insertAdjacentHTML('afterbegin', galleryItems);

function setEqualHeights() {
  const pageWidth = window.innerWidth;
  //4.8777 - сума відношень ширин до висот для картинок у прикладі, тобто при висоті х для кожного зображення вони повинні мати ширину 1.7778х, 1.5х і 1.51х відповідно
  const imgHeight = pageWidth / 4.7878;
  return imgHeight;
}
