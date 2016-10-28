'use strict';

var Gallery = function() {

  this.galleryContainer = document.querySelector('gallery-overlay');
  this.closeElement = document.querySelector('gallery-overlay-close');
  this.preview = document.querySelector('gallery-overlay-image');
  this.galleryPictures = [];
  this.activePicture = 0;
  var self = this;

/*  closeElement.onclick = function() {
    self.galleryContainer.classList.add('invisible');
    self.element.onclick = null;
  };*/
};

Gallery.prototype.setPictures = function(pictures) {
  self.pictures = pictures;
};

Gallery.prototype.show = function(i) {
  galleryContainer.classList.remove('invisible');
  self.setActivePicture(i);

};

Gallery.prototype.hideGallery = function() {
  self.galleryContainer.classList.add('invisible');
  this.element.onclick = null;
};

Gallery.prototype.setActivePicture = function(i) {
  self.activePicture = i;
  self.preview.src = self.pictures[i].url;
  self.galleryContainer.querySelector('likes-count').textContent = self.pictures[i].likes;
  self.galleryContainer.querySelector('comments-count').textContent = self.pictures[i].comments;
  self.galleryContainer.querySelector('gallery-overlay-controls');
  self.activePicture = 0;
};

module.exports = new Gallery();
