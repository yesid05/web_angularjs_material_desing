app.controller('MenuCtrl', ['$scope', function ($scope) {
	$scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
      };
}])