app.controller('authController', function($scope, authFactory, $state,$rootScope) {
  $scope.register = function() {
    authFactory.register($scope.user)
      .then(function() {
        $state.go('home');
      }, function(err) {
        alert(err.data.message);
      });
  }

  $scope.login = function() {
    authFactory.login($scope.user)
      .then(function() {
        $rootScope.currentUser = authFactory.currentUser
        $state.go('home');
      }, function(err) {
        alert(err.data);
      });
  }

});
