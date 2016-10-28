'use strict';

var load = require('./load');
var upload = require('./upload');
var getPictureElement = require('./get-picture-element');
var cookie = require('./cookie');
var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

load('//localhost:1507/api/pictures', function(pictures) {
  pictures.forEach(getPictureElement);
  filtersHidden.classList.remove('hidden');
});
