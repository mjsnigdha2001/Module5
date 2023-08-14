app.controller('ButtonController', ['$scope', '$location', function($scope, $location) {
    $scope.goToMyInfo = function() {
        $location.path('/myinfo');
    };

    $scope.goToSignUp = function() {
        $location.path('/signup');
    };
}]);
