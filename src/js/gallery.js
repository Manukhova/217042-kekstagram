'use strict';

var Gallery = function() {
  var self = this;
  this.galleryContainer = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.likes = document.querySelector('.likes-count');
  this.comments = document.querySelector('.comments-count');
  this.controlPrev = document.querySelector('.gallery-control-prev');
  this.controlNext = document.querySelector('.gallery-control-next');
  this.pictures = [];
  this.activePicture = 0;

  this.closeElement.onclick = function() {
    self.galleryContainer.classList.add('invisible');
  };

  this.setPictures = function(pictures) {
    self.pictures = pictures;
  };

  this.setActivePicture = function(i) {
    self.activePicture = i;
    self.preview.src = self.pictures[i].url;
    self.likes.textContent = self.pictures[i].likes;
    self.comments.textContent = self.pictures[i].comments;
  };

  this.onElementClick = function() {
    this.activePicture++;
    if (this.activePicture >= self.pictures.length) {
      this.activePicture = 0;
    }
    self.setActivePicture(this.activePicture);
  };

  this.setPictures = function(pictures) {
    self.pictures = pictures;
  };

  this.show = function(i) {
    this.galleryContainer.classList.remove('invisible');
    this.setActivePicture(i);
    this.itemNumber = i;
    this.controlNext.onclick = function() {
      self.onElementClick(i);
    };
  };
};


module.exports = new Gallery();
