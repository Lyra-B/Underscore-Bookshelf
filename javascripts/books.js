function handleResponse(response){
  //console.log(response.items);
  _.each(response.items, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
    var view = _.template("<div><img src= '<%= image %>' /></div>");
    // var div = _.template("<div>'<%= view %>'</div>")
    var html = view({ image: i.volumeInfo.imageLinks.thumbnail});
    var imgElement = $(html);
    $("#bookshelf").append(imgElement);
    $("#bookshelf div").addClass("book");
  });

  var highRated =_.filter(response.items, function(i){
    var rating = i.volumeInfo.averageRating;
    if (rating==4 || rating==5){
      return i;
    }
  });


  //iterating over the highRated Array and then iterating again over the dom
  //div elements(with a class .book) and matching rating using an if statement
  //that examines if the image is of the same book with the rating.
  _.each (highRated, function(k){
    // console.log("");
    var book_array = $('.book')
    for(var i = 0; i < book_array.length; i++) {
      console.log("");
      if ($(book_array[i]).find("img").attr("src") === k.volumeInfo.imageLinks.thumbnail){
        $(book_array[i]).addClass("hot");
      }
    }
  });

  //finally appending the span which will contain the star only in the divs that
  // have the class "hot".
  $(".hot").append("<span></span>");
  //"<span class='ui-icon ui-icon-star'></span>"


  //In order to to display a book that matches a certain title without
  //redirecting to a new page I have to find a way to cancel the actions of the
  //previous loops

  //Then I possibly have to iterate over the titles stored in the objects and
  //display only the books that match the title.

}

  // Used information by the the following urls:
  //http://stackoverflow.com/questions/6354149/css-divs-overlapping-how-do-i
  //-force-one-above-the-other
  //http://api.jqueryui.com/zIndex/
  //http://philipwalton.com/articles/what-no-one-told-you-about-z-index/
  //http://api.jqueryui.com/theming/icons/
  //http://api.jquery.com/attribute-equals-selector/
  //http://reference.sitepoint.com/css/displaypositionfloat
  //https://developer.mozilla.org/en-US/docs/Web/CSS/position
  //http://api.jquery.com/checkbox-selector/



