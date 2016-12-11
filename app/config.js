angular.module('InfWebSite')
    
    .config(function($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl: 'app/templates/mainPage.html'
        })
        .otherwise({
            template: '<h1 style="text-align: center">404</h1>'
        })
    
    })