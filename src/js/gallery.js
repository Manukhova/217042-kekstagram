'use strict';

var Gallery = function() {
  this.galleryContainer = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.likes = document.querySelector('.likes-count');
  this.comments = document.querySelector('.comments-count');
  this.controlPrev = document.querySelector('.gallery-control-prev');
  this.controlNext = document.querySelector('.gallery-control-next');
  this.pictures = [];
  this.activePicture = 0;

  this.galleryClose = this.galleryClose.bind(this);

  this.closeElement.addEventListener('click', this.galleryClose);

  this.setPictures = this.setPictures.bind(this);

  this.setActivePicture = this.setActivePicture.bind(this);

  this.onElementClick = this.onElementClick.bind(this);

  this.controlNext.addEventListener('click', this.onElementClick);

  this.show = this.show.bind(this);
};

Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = pictures;
  },

  setActivePicture: function(i) {
    this.activePicture = i;
    this.preview.src = this.pictures[i].url;
    this.likes.textContent = this.pictures[i].likes;
    this.comments.textContent = this.pictures[i].comments;
  },

  onElementClick: function() {
    this.activePicture++;
    if (this.activePicture >= this.pictures.length) {
      this.activePicture = 0;
    }
    this.setActivePicture(this.activePicture);
  },

  show: function(i) {
    this.galleryContainer.classList.remove('invisible');
    this.setActivePicture(i);
    this.itemNumber = i;
  },

  galleryClose: function() {
    this.galleryContainer.classList.add('invisible');
  }

};


module.exports = new Gallery();
