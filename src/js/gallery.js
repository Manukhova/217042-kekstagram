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

};

Gallery.prototype.setPictures = function(pictures) {
  self.pictures = pictures;
};

Gallery.prototype.show = function(i) {

  this.galleryContainer.classList.remove('invisible');
  this.setActivePicture(i);

};

Gallery.prototype.setActivePicture = function(i) {
  this.activePicture = i;
  this.preview.src = self.pictures[i].url;
  this.likes.textContent = self.pictures[i].likes;
  this.comments.textContent = self.pictures[i].comments;
  this.activePicture = 0;
  this.controlNext.onclick = this.onElementClick(i);
};

Gallery.prototype.onElementClick = function(i) {
  this.activePicture = i++;
  if (i > self.pictures.length) {
    i = 0;
  }
  this.setActivePicture(i);
};

/*Gallery.prototype.hide = function() {
  document.querySelector('.gallery-overlay').classList.add('invisible');
  this.element.onclick = null;
};*/


module.exports = new Gallery();
