'use strict';

var Data = function(data) {
  this.data = data;
  this.setLikesCount = this.setLikesCount.bind(this);
  this.getLikesCount = this.getLikesCount.bind(this);
  this.getCommentsCount = this.getCommentsCount.bind(this);
  this.getDateCount = this.getDateCount.bind(this);
};

Data.prototype.setLikesCount = function() {
  return ++this.data.likes;
};

Data.prototype.removeLikesCount = function() {
  return --this.data.likes;
};

Data.prototype.getLikesCount = function() {
  return this.data.likes;
};

Data.prototype.getCommentsCount = function() {
  return this.data.comments;
};

Data.prototype.getDateCount = function() {
  return this.data.created;
};

Data.prototype.getURL = function() {
  return this.data.url;
};

var load = function(url, params, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    var newArray = loadedData.map(function(data) {
      var newData = new Data(data);
      return newData;
    });
    callback(newArray);
  };

  xhr.open('GET', url + '?' + 'from=' + params.from + '&to=' + params.to + '&filter=' + params.filter);
  xhr.send();

};

module.exports = load;
