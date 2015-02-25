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
    //book_objects.push(response.items[i].volumeInfo.title);
    //return book_objects;
    // var {response.items[i].volumeInfo.title} = new Book(response.items[i].id, response.items[i].volumeInfo.title, response.items[i].volumeInfo.imageLinks.thumbnail, response.items[i].volumeInfo.averageRating);
    // book_objects.push(new Book(response.items[i].id, response.items[i].volumeInfo.title, response.items[i].volumeInfo.imageLinks.thumbnail, response.items[i].volumeInfo.averageRating));
  }
  for(var k=0; k<book_objects.length; k++){
    book_objects[k] = new Book(response.items[k].id, response.items[k].volumeInfo.title, response.items[k].volumeInfo.imageLinks.thumbnail, response.items[k].volumeInfo.averageRating);
  }

      // this.id = response.items[i].id;
      // this.title = response.items[i].volumeInfo.title;
      // this.image = response.items[i].volumeInfo.imageLinks.thumbnail;
      // this.rating = response.items[i].volumeInfo.averageRating;
  //console.log(response.items);
  var view = _.template("<div><img src= '<%= image %>' /></div>");

  _.each(response.items, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
    // var div = _.template("<div>'<%= view %>'</div>")
    var html = view({ image: i.volumeInfo.imageLinks.thumbnail});
    var imgElement = $(html);
    $("#bookshelf").append(imgElement);
    $("#bookshelf div").addClass("book");
    // $("#bookshelf div").addId(i.id);
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
  var book_array = $('.book')
  _.each (highRated, function(highRatedBooks){
    // console.log("");
    for(var i = 0; i < book_array.length; i++) {
      //console.log("");
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
// sending a http request and refreshing the page
      event.preventDefault();
      // $("#bookshelf").children().show();
      var imageArray = $("#bookshelf").children().children();
      $(imageArray).hide();
      //a for loop in order to match the submit value to the book titles
      for(var i=0; i<response.items.length; i++){
        if (bookTitle === response.items[i].volumeInfo.title){
          console.log("");
          var imageToShow = $(imageArray).filter("img").attr("src", response.items[i].volumeInfo.imageLinks.thumbnail)
          // $(imageArray).filter(function(img){
          //   $img.attr("src") === response.items[i].volumeInfo.imageLinks.thumbnail;
          // });
          $(imageToShow[0]).show();
        }
      }
    });
  });
}


//$(imageArray).filter("img").attr("src", response.items[i].volumeInfo.imageLinks.thumbnail)
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



