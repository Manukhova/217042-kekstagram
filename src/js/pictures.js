'use strict';

var gallery = require('./gallery');
var Picture = require('./get-picture-element');

var getPictures = function(pictures) {
  gallery.setPictures(pictures);
  pictures.forEach(function(picture, i) {
    var photoElement = new Picture(picture).element;
    photoElement.onclick = function(event) {
      event.preventDefault();
      gallery.show(i);
      photoElement.onclick = null;
    };
  });
};


module.exports = getPictures;
