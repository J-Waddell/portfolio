const app = angular.module('portfolio', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.html'
        })
})