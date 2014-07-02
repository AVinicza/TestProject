angular.module('starter.controllers', [])

.controller('MultiCtrl', function($scope, Friends) {
	$scope.friends = [
		{name:{
			formatted: "Kiss Sanya"
		},
		phoneNumbers: ["061234567", "061234568"],
		emails: ["sanya@trafipax.hu"]},
		{name:{
			formatted: "Gazsi"
		},
		phoneNumbers: ["061234567"]},
		{name:{
			formatted: "Vég Béla"
		},
		phoneNumbers: ["061234567"]},
		{name:{
			formatted: "Kiss Sanya"
		},
		phoneNumbers: ["061234567"]},
		{name:{
			formatted: "Gazsi"
		},
		phoneNumbers: ["061234567"]},
		{name:{
			formatted: "Vég Béla"
		},
		phoneNumbers: ["061234567"]}
	];
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
