'use strict';

var needRequest = true;
var load = function(url, params, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onload = function(evt) {
    var loadedData = JSON.parse(evt.target.response);
    needRequest = (loadedData.length > 0);
    callback(loadedData);
  };

  if(needRequest) {
    xhr.open('GET', url + '?' + 'from=' + params.from + '&to=' + params.to + '&filter=' + params.filter);
    xhr.send();
  }

};

module.exports = load;
