'use strict';

/* Filters */

angular.module('toyBuddyApp.filters', []).filter("fullFilter", function() {
    return function(input) {
    	return input ? '\u2713' : '\u2718';
    };
  });
