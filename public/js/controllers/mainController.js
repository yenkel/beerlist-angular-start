app.controller('beerController', function($scope,beerService) {

	$scope.allBeers = beerService.allBeers;

	$scope.addToMyCollection = function(){
		var beer = {name: $scope.name,
			style: $scope.style,
			abv: $scope.abv,
			img: $scope.img,
			rating: $scope.rating
		};

		beerService.addToMyCollection(beer);
	}	


	$scope.removeFromMyCollection = function(beer){
		beerService.removeFromMyCollection(beer);
	}

	$scope.addRatingToBeer = function (beer,rating) {
		beerService.addRatingToBeer(beer,Number(rating));
	}


	$scope.sortByRating = function (beer) {
		beerService.sortByRating(beer);
	}


	$scope.test = beerService.test;

	$scope.show = false ;

	$scope.showIf = function () {
		if ($scope.show) {
			$scope.show = false;
		} else {
			$scope.show = true;
		}
	}

});

