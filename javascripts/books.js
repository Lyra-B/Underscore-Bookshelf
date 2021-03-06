function handleResponse(response){

  function Book(id, title, image, rating) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.rating = rating;
  }
  var book_objects = [];

  for (var i=0; i < response.items.length; i++){
    book_objects[i] = response.items[i].volumeInfo.title;
  }
  for(var k=0; k<book_objects.length; k++){
    book_objects[k] = new Book(response.items[k].id, response.items[k].volumeInfo.title, response.items[k].volumeInfo.imageLinks.thumbnail, response.items[k].volumeInfo.averageRating);
  }

  var view = _.template("<div><img src= '<%= image %>' /></div>");

  _.each(book_objects, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
    // var div = _.template("<div>'<%= view %>'</div>")
    var html = view({ image: i.image});
    var imgElement = $(html);
    $("#bookshelf").append(imgElement);
    $("#bookshelf div").addClass("book");
    //$("#bookshelf div").addId(i.id);
  });

  var book_array = $('.book')

  var highRated =_.filter(book_objects, function(i){
    // var rating = i.volumeInfo.averageRating;
    if (i.rating==4 || i.rating==5){
      return i;
    }
  });
  //iterating over the highRated Array and then iterating again over the dom
  //div elements(with a class .book) and matching rating using an if statement
  //that examines if the image is of the same book with the rating.

  _.each (highRated, function(highRatedBooks){
    // console.log("");
    for(var i = 0; i < book_array.length; i++) {
      //console.log("");
      if ($(book_array[i]).find("img").attr("src") === highRatedBooks.image){
        $(book_array[i]).addClass("hot");
      }
    }
  });

  //finally appending the span which will contain the star only in the divs that
  // have the class "hot".
  $(".hot").append("<span></span>");
  //.submit doesn't work because the dom isn't yet fully loaded.
  //$( document ).ready(function() handles this problem.
  $( document ).ready(function() {
  //.submit jquery function in order to submit the value
    $( "#titleForm" ).submit(function(event) {
      var bookTitle = $("#searchBox").val();
      //.preventDefault(); jquery function in order to prevent the form from \
      // sending a http request and refreshing the page
      event.preventDefault();
      var imageArray = $("#bookshelf").children().children();
      $(imageArray).hide();
      //a for loop in order to match the submit value to the book titles
      for(var i=0; i<book_objects.length; i++){
        if (bookTitle === book_objects[i].title){
          console.log("");
          var imageToShow = $(imageArray).filter("img").attr("src", book_objects[i].image)
          $(imageToShow[0]).show();
        }
      }
    });
  });
}

//Harry Potter and the Sorcerer's Stone
//Glow in the Dark
//Harry Potter and the Prisoner of Azkaban
//Harry Potter and the Philosopher's Stone
//Harry Potter and the Order of the Phoenix

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
  //http://api.jquery.com/hide/
  //http://api.jquery.com/filter/



