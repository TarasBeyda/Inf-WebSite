angular.module('InfWebSite')
    
    .config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ'
        })
        .when('/admin_panel', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/adminPanel.html',
            title: 'Панель редагування'
        })
        .when('/post', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/post.html',
            title: 'ІНФОТЕХ стаття'
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