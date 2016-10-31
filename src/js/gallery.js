'use strict';

var Gallery = function() {
  var self = this;
  this.galleryContainer = document.querySelector('.gallery-overlay');
  this.closeElement = document.querySelector('.gallery-overlay-close');
  this.preview = document.querySelector('.gallery-overlay-image');
  this.likes = document.querySelector('.likes-count');
  this.comments = document.querySelector('.comments-count');
  this.galleryPictures = [];
  this.activePicture = 0;

  this.closeElement.onclick = function() {
    document.querySelector('.gallery-overlay').classList.add('invisible');
    self.closeElement.onclick = null;
  };
};

Gallery.prototype.setPictures = function(pictures) {
  self.pictures = pictures;
};

Gallery.prototype.show = function(i) {
  this.galleryContainer.classList.remove('invisible');
  this.activePicture = i;
  this.preview.src = self.pictures[i].url;
  this.likes.textContent = self.pictures[i].likes;
  this.comments.textContent = self.pictures[i].comments;
  document.querySelector('.gallery-overlay-controls');
  this.activePicture = 0;
};




/*Gallery.prototype.hide = function() {
  document.querySelector('.gallery-overlay').classList.add('invisible');
  this.element.onclick = null;
};

Gallery.prototype.setActivePicture = function(i) {
  self.activePicture = i;
  self.preview.src = self.pictures[i].url;
  self.galleryContainer.querySelector('likes-count').textContent = self.pictures[i].likes;
  self.galleryContainer.querySelector('comments-count').textContent = self.pictures[i].comments;
  self.galleryContainer.querySelector('gallery-overlay-controls');
  self.activePicture = 0;
};*/


module.exports = new Gallery();
