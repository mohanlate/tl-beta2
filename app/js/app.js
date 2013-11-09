'use strict';


// Declare app level module which depends on filters, and services
angular.module('toyBuddyApp', [
  'ngRoute',
  'toyBuddyApp.controllers',
  'toyBuddyApp.filters',
  'toyBuddyApp.services',
  'toyBuddyApp.animations'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'ctrlHome'});
  $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: 'ctrlCatalog'});
  $routeProvider.when('/catalog/:id', {templateUrl: 'partials/learningResource.html', controller: 'ctrlLearningResource'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


<script>
  $(function () {
    $('#myTab a:first').tab('show')
  })
</script>