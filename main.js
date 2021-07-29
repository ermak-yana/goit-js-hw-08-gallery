const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

const refs = {
    galleryList : document.querySelector('.js-gallery'),
    lightbox : document.querySelector('.js-lightbox') ,
    lightbox__overlay : document.querySelector('.lightbox__overlay'),
    lightbox__image : document.querySelector('.lightbox__image'),
    lightbox__button : document.querySelector('.lightbox__button'),

}



function makeImage(images) {
    return images
      .map(({ preview, description, original }) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
        </a>
        </li>`;
      })
      .join("");
  }
  
  const gallery = makeImage(galleryItems);
 
  refs.galleryList.insertAdjacentHTML('beforeend',gallery);
  refs.galleryList.addEventListener('click',onOpenLightBox);
  refs.lightbox__button.addEventListener('click', onCloseLightBox);
  refs.lightbox__overlay.addEventListener("click", onCloseLightboxOverlay);
  window.addEventListener("keyup", onCloseLightboxESC);


 function onOpenLightBox (e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
      return;
    }
    refs.lightbox.classList.toggle("is-open");
    refs.lightbox__image.src = e.target.dataset.source;
    refs.lightbox__image.alt = e.target.alt;
  };
  function  onCloseLightBox (e) {   
      if (e.target.nodeName === "BUTTON") {
        removeClassIsOpen();
    }
  };
  function removeClassIsOpen() {
    refs.lightbox.classList.remove("is-open");
    refs.lightbox__image.src = "";
    refs.lightbox__image.alt = "";
  };
  function onCloseLightboxOverlay (e) {
    if (e.currentTarget === e.target) {
        removeClassIsOpen();
      }
  };
  function onCloseLightboxESC(e) {
    if (e.key !== "Escape") {
      return;
    }
    removeClassIsOpen();
  }
  