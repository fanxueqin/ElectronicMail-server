angular.module("shoppingMallApp")
.controller("adminController",["$scope","$location",function($scope,$location){
	$scope.loginData={}
	$scope.submitForm = function(){
		if($scope.adminLoginForm.$invalid){
				alert('请检查你的信息');
			}else{
				  $location.path("/adminIndex")
			}
	}
}])
