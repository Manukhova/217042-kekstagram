'use strict';

var SuperClass = function(element) {
  this.element = element;
};

SuperClass.prototype = {
  remove: function() {
    this.element.parentNode.removeChild(this.element);
  },

  show: function() {
    this.container.classList.remove('invisible');
  }


};

module.exports = SuperClass;
