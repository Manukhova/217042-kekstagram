'use strict';

var load = require('./load');
var gallery = require('./gallery');
var Picture = require('./get-picture-element');
var footer = document.querySelector('footer');
var container = document.querySelector('.pictures');
var filters = document.querySelector('.filters');
var activeFilter = 'all';
var pageSize = 12;
var pageNumber = 0;

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

var lastCall = Date.now();
window.addEventListener('scroll', function() {
  if(Date.now() - lastCall >= 100) {
    if(footer.getBoundingClientRect().bottom - window.innerHeight <= 100) {
      loadPictures(activeFilter, pageNumber++);
    }
    lastCall = Date.now();
  }
});

var loadPictures = function(filter, currentPageNumber) {
  load('/api/pictures', {
    from: currentPageNumber * pageSize,
    to: currentPageNumber * pageSize + pageSize,
    filter: filter
  }, getPictures);
};

var changeFilter = function(filterID) {
  container.innerHTML = '';
  activeFilter = filterID;
  pageNumber = 0;
  loadPictures(filterID, pageNumber);
};

filters.addEventListener('change', function(evt) {
  if(evt.target.classList.contains('filters-radio')) {
    changeFilter(evt.target.id);
  }
}, true);

module.exports = loadPictures;
