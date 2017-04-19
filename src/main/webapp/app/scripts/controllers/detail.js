
  angular.module('shoppingMallApp')
  .controller('detail',function($scope){
  	$scope.data = {
  		currentImg : 1
  	}
  	$scope.changeBigImg = function(param){
  		$scope.data.currentImg = param 
  	}
  })