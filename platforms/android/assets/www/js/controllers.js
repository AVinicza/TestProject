angular.module('starter.controllers', [])

.controller('MultiCtrl', function($scope, Friends) {
	Friends.exec(function(friends){
		$scope.friends = friends;
		if(!$scope.$$phase) {
			$scope.$apply();
		}
	});
})

.controller('SingleCtrl', function($scope, Friends) {
	$scope.fetchContact = function(){
		Friends.exec(function(friends){
			for (var i=0; i < friends.length; i++) {
				if(friends[i].phoneNumbers !== null){
		  			for (var k=0; k < friends[i].phoneNumbers.length; k++) {
						if(friends[i].phoneNumbers[k].value == $scope.phoneNum){
		  					$scope.name = friends[i].name.formatted;
		  					if(!$scope.$$phase) {
								$scope.$apply();
							}
		  					return;
		  				}
					}
				}
		 	}
		 	$scope.name = "";
		 	if(!$scope.$$phase) {
				$scope.$apply();
			}
		});
	};
	
});
