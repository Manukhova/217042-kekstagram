'use strict';

var gallery = require('./gallery');
var SuperClass = require('./superclass');
var inherit = require('./utils');

var Picture = function(picture) {
  SuperClass.call(this, picture);
};
inherit(Picture, SuperClass);

Picture = function(picture) {
  this.picture = picture;

  this.container = document.querySelector('.pictures');
  this.template = document.querySelector('template');
  this.templateContainer = 'content' in this.template ? this.template.content : this.template;

  this.pictureElement = this.templateContainer.querySelector('.picture').cloneNode(true);
  this.pictureElement.querySelector('.picture-comments').textContent = this.picture.comments;
  this.pictureElement.querySelector('.picture-likes').textContent = this.picture.likes;
  this.photoImage = new Image();

  this.photoImageUrl = this.photoImageUrl.bind(this);
  this.photoImage.addEventListener('load', this.photoImageUrl);

  this.photoImageError = this.photoImageError.bind(this);
  this.photoImage.addEventListener('error', this.photoImageError);

  this.photoImage.src = this.picture.url;

  this.show = this.show.bind(this);
  this.show();

  this.onImageClick = this.onImageClick.bind(this);

  this.pictureElement.addEventListener('click', this.onImageClick);
};

Picture.prototype = {
  show: function() {
    this.container.appendChild(this.pictureElement);
  },

  photoImageUrl: function() {
    this.pictureElement.querySelector('img').src = this.picture.url;
  },

  photoImageError: function() {
    this.pictureElement.classList.add('picture-load-failure');
  },

  onImageClick: function(event) {
    event.preventDefault();
    gallery.show(this.picture);
  },

  remove: function() {
    this.element.removeEventListener('click', this.onImageClick);
  },

};


module.exports = Picture;
