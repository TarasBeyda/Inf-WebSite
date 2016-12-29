angular.module('InfWebSite')
    
    .config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'JOURNAL'
        })
        .when('/admin_panel', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/adminPanel.html',
            title: 'Admin panel'
        })
        .otherwise({
            template: '<h1 style="text-align: center">404</h1>'
        })
    
    })

    .run(['$rootScope', function($rootScope) {
        
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        
    }])