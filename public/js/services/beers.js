app.service('beerService', function(){
  
  var allBeers = [
		{img:"https://cdn.beeradvocate.com/im/beers/78820.jpg",name:"Kentucky Brunch Brand Stout", style:"American Double / Imperial Stout", abv:12, ratings:[],averageRating:0},
    {img:"https://cdn.beeradvocate.com/im/beers/136936.jpg",name:"Good Morning", style:"American Double / Imperial Stout ", abv:8.4,ratings:[], averageRating:0},
    {img:"https://cdn.beeradvocate.com/im/beers/87846.jpg",name:"King Julius", style:"American Double / Imperial IPA ", abv:8.3,ratings:[], averageRating:0},
    {img:"https://cdn.beeradvocate.com/im/beers/146770.jpg",name:"Very Hazy", style:"American Double / Imperial IPA ", abv:8.6,ratings:[], averageRating:0},
    {img:"https://cdn.beeradvocate.com/im/beers/21690.jpg",name:"Pliny The Younger", style:"American Double / Imperial IPA ", abv:10.0,ratings:[], averageRating:0}
	];


  var test = "Im alive from the service"; 

  var addToMyCollection = function(beer){
    console.log(allBeers);
  	var index = indexInMyCollection(beer);
  	if(index < 0){
		  	allBeers.push(beer);
  	}
  }

  var addRatingToBeer = function (beer,rating) {
    beer.ratings.push(rating);
    var total = 0;
    for (var i =0; i < beer.ratings.length ; i++) {
      total += beer.ratings[i];
    }
    beer.averageRating = total / beer.ratings.length;
    console.log(allBeers);
  }


  var removeFromMyCollection = function(beerToRemove){
  	allBeers.splice(indexInMyCollection(beerToRemove), 1);
  }

  var indexInMyCollection = function(beerToCheck){
  	for(m in allBeers){
  		var beer = allBeers[m];
  		if(beerToCheck.name == beer.name){
  			return m;
  		}
  	}
  	return -1;
  }

var sortByRating = function () {
  allBeers.sort(function(a, b) {
  return a.averageRating - b.averageRating;
  });
}

  return {
  				allBeers: allBeers,
  				addToMyCollection: addToMyCollection,
  				removeFromMyCollection: removeFromMyCollection,
          addRatingToBeer: addRatingToBeer,
          sortByRating: sortByRating,
          test: test
  				};
})