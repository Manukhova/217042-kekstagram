'use strict';

var gallery = require('./gallery');
var getPictureElement = require('./get-picture-element');

var getPictures = function(pictures) {
  gallery.setPictures(pictures);
  pictures.forEach(function(picture, i) {
    var photoElement = getPictureElement(picture);
    photoElement.onclick = function(event) {
      event.preventDefault();
      gallery.show(i);
    };
  });
};


module.exports = getPictures;
