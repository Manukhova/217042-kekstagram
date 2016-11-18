'use strict';

var SuperClass = require('./superclass');
var utils = require('./utils');

var Gallery = function() {
  SuperClass.call(this);
};
utils.inherit(Gallery, SuperClass);

var myEvent = new CustomEvent('likeschange');

Gallery = function() {
  this.galleryContainer = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.likes = document.querySelector('.likes-count');
  this.comments = document.querySelector('.comments-count');
  this.controlNext = this.galleryContainer.querySelector('img');
  this.pictures = [];
  this.activePicture = 0;

  this.remove = this.remove.bind(this);

  this.closeElement.addEventListener('click', this.remove);

  this.setPictures = this.setPictures.bind(this);

  this.setActivePicture = this.setActivePicture.bind(this);

  this.onElementClick = this.onElementClick.bind(this);

  this.controlNext.addEventListener('click', this.onElementClick);

  this.onLikesClick = this.onLikesClick.bind(this);

  this.likes.addEventListener('click', this.onLikesClick);

  this.show = this.show.bind(this);

  window.addEventListener('hashchange', this.onHashChange.bind(this));

  this.getIndexByHash = this.getIndexByHash.bind(this);
};

Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = this.pictures.concat(pictures);
  },

  setActivePicture: function(i) {
    this.activePicture = i;
    var picture = this.pictures[i];
    this.preview.src = picture.getURL();
    this.likes.textContent = picture.getLikesCount();
    this.comments.textContent = picture.getCommentsCount();
  },

  onElementClick: function() {
    ++this.activePicture;
    if (this.activePicture >= this.pictures.length) {
      this.activePicture = 0;
    }
    this.likes.classList.remove('likes-count-liked');
    location.hash = '#photo/' + this.pictures[this.activePicture].getURL();
  },

  onLikesClick: function() {
    var picture = this.pictures[this.activePicture];
    this.likes.classList.toggle('likes-count-liked');
    if(this.likes.classList.contains('likes-count-liked')) {
      this.likes.textContent = picture.setLikesCount();
    } else {
      this.likes.textContent = picture.removeLikesCount();
    }
    window.dispatchEvent(myEvent);
  },

  onLikesChange: function() {
    return this.likes.textContent;
  },

  onHashChange: function() {
    this.restoreFromHash();
  },

  restoreFromHash: function() {
    if(location.hash.match(/#photo\/(\S+)/)) {
      this.show(location.hash);
    } else {
      this.remove();
    }
  },

  show: function(searchParam) {
    var index;
    if(typeof searchParam === 'number') {
      index = searchParam;
    } else {
      index = this.getIndexByHash(searchParam);
    }
    this.setActivePicture(index);

    this.galleryContainer.classList.remove('invisible');
  },

  getIndexByHash: function(adress) {
    var hash = adress.slice(7);
    return this.pictures.findIndex(function(item) {
      return item.getURL() === hash;
    });
  },

  remove: function() {
    this.galleryContainer.classList.add('invisible');
    location.hash = '';
  }

};

module.exports = new Gallery();
