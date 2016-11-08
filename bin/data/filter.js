'use strict';

module.exports = function(list, filterID) {
  switch(filterID) {
    case 'filter-popular':
    return list.sort(function(a, b) {
      return b.likes - a.likes;
    });
    case 'filter-new':
    return list.filter(function(item) {
      if(Date.now() - item.created <= (3 * 24 * 60 * 60 * 1000)) {
        return item;
      }
    }).sort(function(a, b) {
      return b.created - a.created;
    });
    case 'filter-discussed':
    return list.sort(function(a, b) {
      return b.comments - a.comments;
    });

  }

  return list;
};
