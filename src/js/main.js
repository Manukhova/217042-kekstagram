'use strict';

require('./upload');
var load = require('./load');
var Gallery = require('./gallery');
var getPictureElement = require('./get-picture-element');


var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

load('//localhost:1507/api/pictures', function(pictures) {

  Gallery.setPictures(pictures);
  pictures.forEach(getPictureElement);


  filtersHidden.classList.remove('hidden');
});
