(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.dishes = '';
  $scope.message = '';

  $scope.check = function () {
  	var items = $scope.dishes.split(',');
  	if ($scope.dishes == '') {
  		$scope.message = 'Please enter data first'
  	}
  	else if (items.length <4) {
  		$scope.message = 'Enjoy'
  	}
  	else {
  		$scope.message = 'Too Much'
  	}
  };
}

})();

