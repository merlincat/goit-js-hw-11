import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let baseUrl = 'https://pixabay.com/api/';
let searchQuery = null;

const lightbox = new SimpleLightbox('.gallery-link', {
  nav: true,
  captionDelay: 250,
  captionsData: 'alt',
  close: true,
  enableKeyboard: true,
  docClose: true,
  scrollZoom: false,
  fadeSpeed: 400,
});

function showLoader() {
  loader.style.display = 'block';
  loader.style.visibility = 'visible';
}
function hideLoader() {
  loader.style.display = 'none';
  loader.style.visibility = 'hidden';
}

function fetchImages() {
  const searchParams = new URLSearchParams({
    key: '41675513-91cb25c2d4155284de80d9ebe',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q: searchQuery,
  });
  return fetch(`${baseUrl}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
form.addEventListener('submit', event => {
  event.preventDefault();
  galleryContainer.innerHTML = '';
  showLoader();
  searchQuery = event.target.elements.search.value.trim();
  fetchImages()
    .then(images => {
      if (images.hits && images.hits.length > 0) {
        renderGallery(images.hits);
      } else {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
        });
        galleryContainer.innerHTML = '';
      }
    })
    .catch(error => {
      console.log('Error fetching images: ' + error);
    })
    .finally(() => {
      hideLoader();
    });
  event.currentTarget.reset();
});

function renderGallery(images) {
  const mockupGallery = images.reduce(
    (html, image) =>
      html +
      `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="descr-container">
  <div class="image-descr">Likes
  <span class="image-descr-value">${image.likes}</span>
  </div>
    <div class="image-descr">Views
  <span class="image-descr-value">${image.views}</span>
  </div>
      <div class="image-descr">Comments
  <span class="image-descr-value">${image.comments}</span>
  </div>
        <div class="image-descr">Downloads
  <span class="image-descr-value">${image.downloads}</span>
  </div>
  </div>
</li>`,
    ''
  );
  galleryContainer.innerHTML = mockupGallery;
  lightbox.refresh();
}
