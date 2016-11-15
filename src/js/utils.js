'use strict';

module.exports = {
  inherit: function(Child, Parent) {
    var EmptyConstructor = function() {};
    EmptyConstructor.prototype = Parent.prototype;
    Child.prototype = new EmptyConstructor();
  }
};
