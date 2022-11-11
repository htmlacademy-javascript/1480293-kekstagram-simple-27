import {createPhotosDescription} from './data.js';

const photosContainer = document.querySelector('.pictures');
//userDialog.classList.remove('hidden');

//userDialog.querySelector('.setup-similar').classList.remove('hidden');

//const similarListPictures = picturesContainer.querySelector('.img-upload');
const similarPhotosTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotosDescription = createPhotosDescription();

const similarListFragment = document.createDocumentFragment();

similarPhotosDescription.forEach(({likes, URL, comments}) => {
  const photoElement = similarPhotosTemplate.cloneNode(true);
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__img').src = URL;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(photoElement);
});

const createphotosContainer = function() {
  photosContainer.appendChild(similarListFragment);
};
export {createphotosContainer};

