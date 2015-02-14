function handleResponse(response){
  //console.log(response.items);
  var view = _.template("<div><img src= '<%= image %>' /></div>");

  _.each(response.items, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
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
  _.each (highRated, function(highRatedBooks){
    // console.log("");
    var book_array = $('.book')
    for(var i = 0; i < book_array.length; i++) {
      console.log("");
      if ($(book_array[i]).find("img").attr("src") === highRatedBooks.volumeInfo.imageLinks.thumbnail){
        $(book_array[i]).addClass("hot");
      }
    }
  });

  //finally appending the span which will contain the star only in the divs that
  // have the class "hot".
  $(".hot").append("<span></span>");
  //"<span class='ui-icon ui-icon-star'></span>"

  //.submit doesn't work because the dom isn't yet fully loaded.
//$( document ).ready(function() handles this problem.
  $( document ).ready(function() {
//.submit jquery function in order to submit the value
    $( "#titleForm" ).submit(function(event) {
      var bookTitle = $("#searchBox").val();
//.preventDefault(); jquery function in order to prevent the form from \
// sending a http request
      event.preventDefault();
      //a for loop in order to match the submit value to the book titles
      for(var i=0; i<response.items.length; i++){
        if (bookTitle === response.items[i].volumeInfo.title){
          $("#bookshelf").empty();
          var html = view({ image: response.items[i].volumeInfo.imageLinks.thumbnail});
          var imgElement = $(html);
          $("#bookshelf").append(imgElement);
          $("#bookshelf div").addClass("book");
          //alert(bookTitle);
        }
        // }else {
        //   alert("No matches");
        // }
      }
    });
  });
}

//Harry Potter and the Sorcerer's Stone

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
  //http://api.jquery.com/val/
  //http://api.jquery.com/submit/



