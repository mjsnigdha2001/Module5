app.controller('SignUpController', ['$scope', 'MenuDataService', 'UserDataService', function($scope, MenuDataService, UserDataService) {
    // Initialize user data object
    $scope.user = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        favoriteMenuNumber: ''
    };

    $scope.submitForm = function() {
        if ($scope.signupForm.$valid) {
            MenuDataService.getMenuItem($scope.user.favoriteMenuNumber)
                .then(function(response) {
                    if (response) {
                        UserDataService.saveUserData($scope.user);
                        $scope.successMessage = "Your information has been saved";
                    } else {
                        $scope.errorMessage = "No such menu number exists";
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    };
}]);
