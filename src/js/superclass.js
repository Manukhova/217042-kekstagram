'use strict';

var SuperClass = function(element) {
  this.element = element;
};

SuperClass.prototype = {
  remove: function(element, parent) {
    parent.removeChild(element);
  },

  show: function(element, parent) {
    parent.appendChild(element);
  }
};

module.exports = SuperClass;
