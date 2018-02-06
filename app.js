const app = angular.module('portfolio', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.html'
        })

        .when('/negative', {
            controller: 'negativeCtrl',
            templateUrl: 'partials/negative.html'
        })

        .when('/animated', {
            controller: 'animatedCtrl',
            templateUrl: 'partials/animated.html'
        })
})