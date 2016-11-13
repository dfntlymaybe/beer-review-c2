var BeerReviewApp = function(){

  var beers = [];

  //Adding beers to the list
  function addBeer (name, category, review){
    var beer = {
      name: name,
      category: category,
      review: review
    };
    beers.push(beer);
  };

  //Clear the list from the screen and repring it
  function renderBeers(){
    $('.beers-list').empty();
    for(var i = 0 ; i < beers.length ; i++){
      $('.beers-list').append('<li>Beer name: ' + beers[i].name + ' Category: ' + beers[i].category + ' Rated: ' + beers[i].review + 'stars</li>');
    }
  };

  //Sort list by review(toggle)
  function sortListByRevivew(){
    if(beers[0].review > beers[beers.length-1].review){
      beers = beers.sort(function(a, b){return a.review - b.review;});
    }else{
      beers = beers.sort(function(a, b){return b.review - a.review;});
    }
  }

  return {
    addBeer: addBeer,
    renderBeers: renderBeers,
    sortListByRevivew: sortListByRevivew
  }

};

var beerApp = BeerReviewApp();

$('.post-beer').click(function() {
  event.preventDefault();
  
  //get all data from inputs
  var beerName = $('.beer-input').val();
  var beerCategory = $('.category-input').val();
  var review = $('select').val();

  //create a beer objectwith the new data and add it to the beers array
  beerApp.addBeer(beerName, beerCategory, parseInt(review));

  //render the screen with the new content
  beerApp.renderBeers()

  $('input').val(''); //clear input text fields
});

$('.sort-beer-list').click(function(){
  event.preventDefault();
  beerApp.sortListByRevivew();
  beerApp.renderBeers();
});