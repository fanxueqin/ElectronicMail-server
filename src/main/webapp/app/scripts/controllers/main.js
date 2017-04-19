'use strict';

/**
 * @ngdoc function
 * @name shoppingMallApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingMallApp
 */
angular.module('shoppingMallApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
angular.module('shoppingMallApp')
  .controller('MainCtrl_new_shopping', function ($scope) {
    $scope.data = {
    	current : 1
    };
    $scope.setCurrent =  function(param){
    		$scope.data.current = param;
    }
  });