'use strict';

var Gallery = function() {
  var self = this;
  var galleryContainer = document.querySelector('.gallery-overlay');
  var closeElement = document.querySelector('.gallery-overlay-close');
  var preview = document.querySelector('.gallery-overlay-image');
  var galleryPictures = [];
  var activePicture = 0;

  closeElement.onclick = function() {
    document.querySelector('.gallery-overlay').classList.add('invisible');
    closeElement.onclick = null;
  };
};

Gallery.prototype.setPictures = function(pictures) {
  self.pictures = pictures;
};

Gallery.prototype.show = function(i) {
  document.querySelector('.gallery-overlay').classList.remove('invisible');
  self.activePicture = i;
  document.querySelector('.gallery-overlay-image').src = self.pictures[i].url;
  document.querySelector('.likes-count').textContent = self.pictures[i].likes;
  document.querySelector('.comments-count').textContent = self.pictures[i].comments;
  document.querySelector('.gallery-overlay-controls');
  self.activePicture = 0;
};




/*Gallery.prototype.hideGallery = function() {
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
