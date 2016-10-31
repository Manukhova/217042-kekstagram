'use strict';

var Gallery = require('./gallery');
var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

var getPictureElement = function(picture, i) {
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
  pictureElement.onclick = function() {
    Gallery.show(i);
  };


  container.appendChild(pictureElement);

};

module.exports = getPictureElement;
