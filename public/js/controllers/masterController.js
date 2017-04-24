app.controller('masterController', function($scope, authFactory,$rootScope) {
  $rootScope.currentUser = authFactory.currentUser
  $scope.logout = authFactory.logout;
  authFactory.getCurrentUser();
});
