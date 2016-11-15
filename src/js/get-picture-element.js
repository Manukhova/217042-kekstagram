'use strict';

var gallery = require('./gallery');
var SuperClass = require('./superclass');
var utils = require('./utils');

var Picture = function(picture, i) {
  SuperClass.call(this, picture, i);
};
utils.inherit(Picture, SuperClass);

Picture = function(picture, i) {
  this.picture = picture;
  this.i = i;
  this.container = document.querySelector('.pictures');
  this.template = document.querySelector('template');
  this.templateContainer = 'content' in this.template ? this.template.content : this.template;

  this.element = this.templateContainer.querySelector('.picture').cloneNode(true);
  this.element.querySelector('.picture-comments').textContent = this.picture.getCommentsCount();
  this.pictureLikes = this.element.querySelector('.picture-likes');
  this.pictureLikes.textContent = this.picture.getLikesCount();
  this.photoImage = new Image();

  this.photoImageUrl = this.photoImageUrl.bind(this);
  this.photoImage.addEventListener('load', this.photoImageUrl);

  this.photoImageError = this.photoImageError.bind(this);
  this.photoImage.addEventListener('error', this.photoImageError);

  this.photoImage.src = this.picture.getURL();

  this.show = this.show.bind(this);
  this.show();

  this.onImageClick = this.onImageClick.bind(this);
  this.element.addEventListener('click', this.onImageClick);
};

Picture.prototype = {

  show: function() {
    SuperClass.prototype.show.call(this, this.element, this.container);
  },

  photoImageUrl: function() {
    this.element.querySelector('img').src = this.picture.getURL();
  },

  photoImageError: function() {
    this.element.classList.add('picture-load-failure');
  },

  onImageClick: function(event) {
    event.preventDefault();
    gallery.show(this.i);
  },

  remove: function() {
    this.element.removeEventListener('click', this.onImageClick);
    SuperClass.prototype.remove.call(this, this.element, this.container);
  },

};


module.exports = Picture;
