app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Welcome to our Restaurant</h1>'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'categories.html',
            controller: 'CategoriesController',
            resolve: {
                categoriesData: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'items.html',
            controller: 'ItemsController',
            resolve: {
                itemsData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });

    $urlRouterProvider.otherwise('/');
}]);
