const app = angular.module('portfolio', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/home')
})