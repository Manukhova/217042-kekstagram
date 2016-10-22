'use strict';

var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

var container = document.querySelector('.pictures');
var template = document.querySelector('template');
var templateContainer = 'content' in template ? template.content : template;

var PICTURES_LOAD_URL = 'http://localhost:1507/api/pictures';

var load = function(url, callback, callbackName) {
  if (!callbackName) {
    callbackName = 'cb' + Date.now();
  }

  window[callbackName] = function(pictures) {
    callback(pictures);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};

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
  return pictureElement;
};

var renderPictures = function(pictures) {
  pictures.forEach(function(picture) {
    container.appendChild(getPictureElement(picture));
  });
};

load(PICTURES_LOAD_URL, renderPictures, '__jsonpCallback');
filtersHidden.classList.remove('hidden');
