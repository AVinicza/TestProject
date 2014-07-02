angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
	var functionSwitch = function(){};
	
	var friends = [];  

  	var fields = ["name", "phoneNumbers"];
  	document.addEventListener("deviceready", function(){
		var options = new ContactFindOptions();
		options.filter="";
		options.multiple=true; 
	  
	  	navigator.contacts.find( fields, function(contacts){
	  		for (var i=0; i < contacts.length; i++) {
				friends.push(contacts[i].clone());
				if(friends[i].phoneNumbers !== null){
					for (var k=0; k < friends[i].phoneNumbers.length; k++){
						friends[i].phoneNumbers[k].value = friends[i].phoneNumbers[k].value.replace(/\s/g, '');
					}
				}
			}
			functionSwitch(friends);
			
	  	}, function(error){
	  		console.log("Error");
	  	}, options);
	},
	false);

  	return {
    	exec: function(getContact){
			if(typeof(friends) === undefined || friends.length === 0){
				functionSwitch = getContact;
			}
			else{
				getContact(friends);
			}
		}
 	};
});
