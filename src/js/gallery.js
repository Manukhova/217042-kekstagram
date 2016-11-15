'use strict';


var SuperClass = require('./superclass');
var utils = require('./utils');

var Gallery = function() {
  SuperClass.call(this);
};
utils.inherit(Gallery, SuperClass);

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
};

Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = this.pictures.concat(pictures);
  },

  setActivePicture: function(i) {
    this.activePicture = i;
    this.preview.src = this.pictures[i].getURL();
    this.likes.textContent = this.pictures[i].getLikesCount();
    this.comments.textContent = this.pictures[i].getCommentsCount();
  },

  onElementClick: function() {
    this.activePicture++;
    if (this.activePicture >= this.pictures.length) {
      this.activePicture = 0;
    }
    this.setActivePicture(this.activePicture);
  },

  onLikesClick: function(evt) {
    this.likes.classList.toggle('likes-count-liked');
    if(evt.target.classList.contains('likes-count-liked')) {
      this.likes.textContent = this.pictures[this.activePicture].setLikesCount();
    } else {
      this.likes.textContent = this.pictures[this.activePicture].removeLikesCount();
    }
  },

  show: function(i) {
    this.galleryContainer.classList.remove('invisible');
    this.setActivePicture(i);
  },

  remove: function() {
    this.galleryContainer.classList.add('invisible');
  }

};

module.exports = new Gallery();
