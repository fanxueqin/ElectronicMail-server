angular.module("shoppingMallApp")
.controller("changePassController",function($scope){
	$scope.passData={}
	$scope.submitForm = function(){
		if($scope.signUpForm.$invalid){
				alert('请检查你的信息');
			}else{
				alert('提交成功！');
			}
	}
})
/*.directive('compare',function(){
		var o = {};
		o.strict = 'AE';
		o.scope={
			orgText: '=compare'
		}
		o.require = 'ngModel';
		o.link = function(sco, ele, att, con){
			con.$validators.compare = function(v){
				return v == sco.orgText;
			}
			sco.$watch('orgText',function(){
				con.$validate();
			});
		}
		return o;

	})*/