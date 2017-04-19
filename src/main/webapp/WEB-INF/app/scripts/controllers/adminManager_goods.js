angular.module("shoppingMallApp")
.controller("adminManager_goods",["$scope","$location",function($scope,$location){
	$scope.newGood = {
		name:'',
		detail: '',
		img: '',
		catalog: '',
		price:''
	}
	$scope.data={
		lists:[{
				id: 'order_1',
				name: 'EMIE美妆镜',
				urlImg:['../../images/list_recomend/1.jpg','../../images/list_recomend/2.jpg','../../images/list_recomend/3.jpg'],
				detail: '出门在外想补个妆或者想自拍时光线却很暗，随身携带一个EMIE美妆镜，“镜子占用空间很小，放在包包里随时可以拿出来使用”，三级LED补光功能，“可以根据光线明暗度选择合适的补光强度”，“终于不用担心自拍时是个黑人了”，高清镜面，“可以照出脸上每一个小细节，化一个精致无死角的妆”，“强迫症患者的福音',
				price: 72.00,
				catalog: 1,
				addTime: 2017-01-02
			},{
				id: 'order_2',
				name:'经典Q版的香水礼盒',
				urlImg:['../../images/list_recomend/4.jpg','../../images/list_recomend/5.jpg','../../images/list_recomend/6.jpg'],
				detail: '很多女盆友在选择香水时都会略感不知所措，很难选到心仪的一款，那气味图书馆这款经典Q版的香水礼盒可以带给你跨品类的香氛体验，拥有天使、桂花、雏菊、粉、彩虹、雨滴、东京、热恋、伦敦、黑色10种味道，包含了气味图书馆香水创作的五大经典系列，带给你千变万化的嗅觉体验。',
				price: 338.00,
				catalog: 2,
				addTime: 2017-01-03
			},{
				id: 'order_1',
				name: 'EMIE美妆镜',
				urlImg:['../../images/list_recomend/1.jpg','../../images/list_recomend/2.jpg','../../images/list_recomend/3.jpg'],
				detail: '出门在外想补个妆或者想自拍时光线却很暗，随身携带一个EMIE美妆镜，“镜子占用空间很小，放在包包里随时可以拿出来使用”，三级LED补光功能，“可以根据光线明暗度选择合适的补光强度”，“终于不用担心自拍时是个黑人了”，高清镜面，“可以照出脸上每一个小细节，化一个精致无死角的妆”，“强迫症患者的福音',
				price: 72.00,
				catalog: 1,
				addTime: 2017-01-02
			},{
				id: 'order_2',
				name:'经典Q版的香水礼盒',
				urlImg:['../../images/list_recomend/4.jpg','../../images/list_recomend/5.jpg','../../images/list_recomend/6.jpg'],
				detail: '很多女盆友在选择香水时都会略感不知所措，很难选到心仪的一款，那气味图书馆这款经典Q版的香水礼盒可以带给你跨品类的香氛体验，拥有天使、桂花、雏菊、粉、彩虹、雨滴、东京、热恋、伦敦、黑色10种味道，包含了气味图书馆香水创作的五大经典系列，带给你千变万化的嗅觉体验。',
				price: 338.00,
				catalog: 2,
				addTime: 2017-01-03
			},{
				id: 'order_1',
				name: 'EMIE美妆镜',
				urlImg:['../../images/list_recomend/1.jpg','../../images/list_recomend/2.jpg','../../images/list_recomend/3.jpg'],
				detail: '出门在外想补个妆或者想自拍时光线却很暗，随身携带一个EMIE美妆镜，“镜子占用空间很小，放在包包里随时可以拿出来使用”，三级LED补光功能，“可以根据光线明暗度选择合适的补光强度”，“终于不用担心自拍时是个黑人了”，高清镜面，“可以照出脸上每一个小细节，化一个精致无死角的妆”，“强迫症患者的福音',
				price: 72.00,
				catalog: 1,
				addTime: 2017-01-02
			},{
				id: 'order_2',
				name:'经典Q版的香水礼盒',
				urlImg:['../../images/list_recomend/4.jpg','../../images/list_recomend/5.jpg','../../images/list_recomend/6.jpg'],
				detail: '很多女盆友在选择香水时都会略感不知所措，很难选到心仪的一款，那气味图书馆这款经典Q版的香水礼盒可以带给你跨品类的香氛体验，拥有天使、桂花、雏菊、粉、彩虹、雨滴、东京、热恋、伦敦、黑色10种味道，包含了气味图书馆香水创作的五大经典系列，带给你千变万化的嗅觉体验。',
				price: 338.00,
				catalog: 2,
				addTime: 2017-01-03
			},{
				id: 'order_1',
				name: 'EMIE美妆镜',
				urlImg:['../../images/list_recomend/1.jpg','../../images/list_recomend/2.jpg','../../images/list_recomend/3.jpg'],
				detail: '出门在外想补个妆或者想自拍时光线却很暗，随身携带一个EMIE美妆镜，“镜子占用空间很小，放在包包里随时可以拿出来使用”，三级LED补光功能，“可以根据光线明暗度选择合适的补光强度”，“终于不用担心自拍时是个黑人了”，高清镜面，“可以照出脸上每一个小细节，化一个精致无死角的妆”，“强迫症患者的福音',
				price: 72.00,
				catalog: 1,
				addTime: 2017-01-02
			},{
				id: 'order_2',
				name:'经典Q版的香水礼盒',
				urlImg:['../../images/list_recomend/4.jpg','../../images/list_recomend/5.jpg','../../images/list_recomend/6.jpg'],
				detail: '很多女盆友在选择香水时都会略感不知所措，很难选到心仪的一款，那气味图书馆这款经典Q版的香水礼盒可以带给你跨品类的香氛体验，拥有天使、桂花、雏菊、粉、彩虹、雨滴、东京、热恋、伦敦、黑色10种味道，包含了气味图书馆香水创作的五大经典系列，带给你千变万化的嗅觉体验。',
				price: 338.00,
				catalog: 2,
				addTime: 2017-01-03
			},{
				id: 'order_1',
				name: 'EMIE美妆镜',
				urlImg:['../../images/list_recomend/1.jpg','../../images/list_recomend/2.jpg','../../images/list_recomend/3.jpg'],
				detail: '出门在外想补个妆或者想自拍时光线却很暗，随身携带一个EMIE美妆镜，“镜子占用空间很小，放在包包里随时可以拿出来使用”，三级LED补光功能，“可以根据光线明暗度选择合适的补光强度”，“终于不用担心自拍时是个黑人了”，高清镜面，“可以照出脸上每一个小细节，化一个精致无死角的妆”，“强迫症患者的福音',
				price: 72.00,
				catalog: 1,
				addTime: 2017-01-02
			},{
				id: 'order_2',
				name:'经典Q版的香水礼盒',
				urlImg:['../../images/list_recomend/4.jpg','../../images/list_recomend/5.jpg','../../images/list_recomend/6.jpg'],
				detail: '很多女盆友在选择香水时都会略感不知所措，很难选到心仪的一款，那气味图书馆这款经典Q版的香水礼盒可以带给你跨品类的香氛体验，拥有天使、桂花、雏菊、粉、彩虹、雨滴、东京、热恋、伦敦、黑色10种味道，包含了气味图书馆香水创作的五大经典系列，带给你千变万化的嗅觉体验。',
				price: 338.00,
				catalog: 2,
				addTime: 2017-01-03
			}]		
	}
	$scope.good_del = function(index){
		$scope.data.lists.splice(index,1)
	}
	$scope.submitForm = function(){
		if($scope.addGoods.$invalid){
			alert('请检查你的信息')
		}else{
			console.log($scope.data.lists)
			$scope.data.lists.push($scope.newGood)
			$location.path("/adminManager_goods")
		}
		
	}
}])
   
  