'use strict';


var SuperClass = require('./superclass');
var inherit = require('./utils');

var Gallery = function() {
  SuperClass.call(this);
};
inherit(Gallery, SuperClass);

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

  this.show = this.show.bind(this);
};

Gallery.prototype = {
  setPictures: function(pictures) {
    this.pictures = pictures;
  },

  setActivePicture: function(picture) {
    this.activePicture = picture;
    this.preview.src = picture.url;
    this.likes.textContent = picture.likes;
    this.comments.textContent = picture.comments;
  },

  onElementClick: function() {
    this.i = this.pictures.indexOf(this.activePicture);
    if (this.i >= this.pictures.length) {
      this.activePicture = this.pictures[0];
    }
    this.activePicture = this.pictures[++this.i];
    this.setActivePicture(this.activePicture);

  //   this.activePicture++;
  //   if (this.activePicture >= this.pictures.length) {
  //     this.activePicture = 0;
  //   }
  //   this.setActivePicture(this.activePicture);
  },

  show: function(picture) {
    this.galleryContainer.classList.remove('invisible');
    this.setActivePicture(picture);
    this.itemNumber = picture;
  },

  remove: function() {
    this.galleryContainer.classList.add('invisible');
  }

};

module.exports = new Gallery();
