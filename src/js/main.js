'use strict';

require('./upload');
var load = require('./load');
var getPictureElement = require('./get-picture-element');

var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

load('//localhost:1507/api/pictures', function(pictures) {
  pictures.forEach(getPictureElement);
  filtersHidden.classList.remove('hidden');
});
