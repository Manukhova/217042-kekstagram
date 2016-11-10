'use strict';

require('./upload');
var loadPictures = require('./pictures');

var filtersHidden = document.querySelector('.filters');

filtersHidden.classList.add('hidden');

loadPictures(localStorage.getItem('filter'), 0);

filtersHidden.classList.remove('hidden');
