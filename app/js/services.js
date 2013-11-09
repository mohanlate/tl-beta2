'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('toyBuddyApp.services', ['ngResource'])
	.factory('svcCatalog', ['$resource', function($resource){
		return $resource('server/dbService.php', {}, {
			query: {
				method:'GET', 
				params:{
					id:'@id'
						}, 
				isArray:true}
		});
}]);