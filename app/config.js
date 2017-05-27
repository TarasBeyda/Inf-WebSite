angular.module('InfWebSite')
    
    .config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ'
        })
        .when('/news', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ новини'
        })
        .when('/reviews', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ огляди'
        })
        .when('/articles', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ статті'
        })
        .when('/blogs', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/mainPage.html',
            title: 'ІНФОТЕХ блоги'
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
        .when('/contact', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/contact.html',
            title: 'ІНФОТЕХ контакти'
        })
        .when('/search', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/searchPost.html',
            title: 'ІНФОТЕХ пошук'
        })
        .when('/agreements', {
            controller: 'mainPageCtrl',
            templateUrl: 'app/templates/agreements.html',
            title: 'ІНФОТЕХ угода'
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