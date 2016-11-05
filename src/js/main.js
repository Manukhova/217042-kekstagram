'use strict';

require('./upload');
var loadPictures = require('./pictures');

var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

loadPictures('filter-popular', 0);

filtersHidden.classList.remove('hidden');
