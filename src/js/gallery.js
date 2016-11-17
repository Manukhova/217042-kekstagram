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
  this.controlPrev = document.querySelector('.gallery-control-prev');
  this.controlNext = document.querySelector('.gallery-control-next');
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
  // this.restoreFromHash();
};

Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = this.pictures.concat(pictures);
  },

  setActivePicture: function(i, adress) {
    if(adress !== '') {
      this.preview.src = adress;
    } else {
      this.activePicture = i;
    }
    this.preview.src = this.pictures[i].getURL();
    this.likes.textContent = this.pictures[i].getLikesCount();
    this.comments.textContent = this.pictures[i].getCommentsCount();
  },

  onElementClick: function() {
    this.likes.classList.remove('likes-count-liked');
    location.hash = '#photo/photos/' + (this.activePicture++) + '.jpg';
    // this.activePicture++;
    if (this.activePicture >= this.pictures.length) {
      this.activePicture = 0;
    }
    // this.setActivePicture(this.activePicture);
    this.setActivePicture(location.hash);
  },

  onLikesClick: function() {
    this.likes.classList.toggle('likes-count-liked');
    if(this.likes.classList.contains('likes-count-liked')) {
      this.likes.textContent = this.pictures[this.activePicture].setLikesCount();
    } else {
      this.likes.textContent = this.pictures[this.activePicture].removeLikesCount();
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
      this.i = parseInt(((location.hash).slice(14)), 10);
      this.show(this.i, location.hash);
    } else {
      this.remove();
    }
  },

  show: function(i, adress) {
    // this.galleryContainer.classList.remove('invisible');
    // location.hash = '#photo/photos/' + i + '.jpg';
    if(adress !== '') {
      this.setActivePicture(i, adress);
    } else {
      this.remove();
    }
  },

  remove: function() {
    // this.galleryContainer.classList.add('invisible');
    location.hash = '';
  }

};

module.exports = new Gallery();
