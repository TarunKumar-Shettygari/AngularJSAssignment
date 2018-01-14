angular.module('RestApp',[])
    .controller('RestController',function($scope,$http){
    	$scope.tableFlag=true;
    	$scope.createFlag=false;
    	$scope.updateFlag=false;
    	$scope.name="name";
    	$scope.email_id="xyz@gmail.com";
    	$scope.password="abcd1234";
    	$scope.create=function(){
    		$scope.name="";
    		$scope.email_id="";
    		$scope.password="";
    		$scope.tableFlag=false;
            $scope.createFlag=true;
        }
    	$scope.createProfile=function(){
    		var dataObj={};
    		dataObj.name=$scope.name;
    		dataObj.email_id=$scope.email_id;
    		dataObj.password=$scope.password;
    		$http.post("http://localhost:8080/RestAssignment/webapi/profiles",dataObj);
    		$scope.createFlag=false;
    		$scope.tableFlag=true;
    		$http.get("http://localhost:8080/RestAssignment/webapi/profiles")
        	.then(function(response) {
        		$scope.response=response.data;
        	});
        }
    	$scope.update=function(name){
    		$http.get("http://localhost:8080/RestAssignment/webapi/profiles/"+name)
        	.then(function(response) {
        		$scope.name=response.data.name;
        		$scope.email_id=response.data.email_id;
        		$scope.password=response.data.password;
        		console.log(response.data);
        		console.log(response.data.name);
        		console.log(response.data.email_id);
        		console.log(response.data.password);
        	});
    		$scope.tableFlag=false;
            $scope.updateFlag=true;
        }
    	$scope.updateProfile=function(){
    		var dataObj={};
    		dataObj.name=$scope.name;
    		dataObj.email_id=$scope.email_id;
    		dataObj.password=$scope.password;
    		$http.put("http://localhost:8080/RestAssignment/webapi/profiles",dataObj);
    		$http.get("http://localhost:8080/RestAssignment/webapi/profiles")
        	.then(function(response) {
        		$scope.response=response.data;
        	});
    		$scope.updateFlag=false;
    		$scope.tableFlag=true;
        }
    	$scope.del=function(name){
    		$http.delete("http://localhost:8080/RestAssignment/webapi/profiles/"+name);
    		$http.get("http://localhost:8080/RestAssignment/webapi/profiles")
            	.then(function(response) {
            		$scope.response=response.data;
            });
    	}
        $http.get("http://localhost:8080/RestAssignment/webapi/profiles")
            .then(function(response) {
               $scope.response=response.data;
        });

});
