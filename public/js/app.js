var app = angular.module('beerList', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
          url: '/home',
          controller: 'mainController',
          templateUrl: '/templates/home.html'
})
.state('beer', {
         url: '/beers/:id',
         controller: 'beerController',
         templateUrl: '/templates/beer.html',
  params: {
    beerParam: null
  }
})

.state('register', {
  url: '/register',
  templateUrl: '/templates/register.html',
  controller: 'authController'
})

.state('login', {
  url: '/login',
  templateUrl: '/templates/login.html',
  controller: 'authController'
})


  $urlRouterProvider.otherwise('/home');
}]);
