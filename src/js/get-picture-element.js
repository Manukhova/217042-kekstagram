'use strict';

module.exports = getPictureElement;


var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

var getPictureElement = function(picture) {
  var pictureElement = templateContainer.querySelector('.picture').cloneNode(true);
  pictureElement.querySelector('.picture-comments').textContent = picture.comments;
  pictureElement.querySelector('.picture-likes').textContent = picture.likes;
  var photoImage = new Image();
  photoImage.onload = function() {
    pictureElement.querySelector('img').src = picture.url;
  };
  photoImage.onerror = function() {
    pictureElement.classList.add('picture-load-failure');
  };
  photoImage.src = picture.url;
  container.appendChild(pictureElement);
};
