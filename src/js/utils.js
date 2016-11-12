'use strict';

function inherit(Child, Parent) {
  var EmptyConstructor = function() {};
  EmptyConstructor.prototype = Parent.prototype;
  Child.prototype = new EmptyConstructor();
}

module.exports = inherit;
