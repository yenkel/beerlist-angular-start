app.controller('beerController', function($scope, $stateParams, beerService) {
    $scope.beer = $stateParams.beerParam;

    if (!$stateParams.beerParam) {
        beerService.getBeer($stateParams.id)
      }

      $scope.addToMyReviews= function(){
              var reviews = {
                  name: $scope.name,
                  text: $scope.text
              };
              beerService.addToMyReviews(reviews, $scope.beer._id).then(function(response){
              $scope.beer = response.data; // response.data is the beer as of now


              });;

          }

  });
