app.controller('MyInfoController', ['$scope', 'UserDataService', function($scope, UserDataService) {
    $scope.goToSignUp = function() {
        $state.go('signup');
    };

    $scope.userData = UserDataService.getUserData();
}]);
