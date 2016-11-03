'use strict';

require('./upload');
var load = require('./load');

var getPictures = require('./pictures');

var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

load('//localhost:1507/api/pictures', function(pictures) {
  getPictures(pictures);
  filtersHidden.classList.remove('hidden');
});
