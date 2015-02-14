function handleResponse(response){
  //console.log(response.items);
  _.each(response.items, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
    var view = _.template("<div><img src= '<%= image %>' /></div>");
    // var div = _.template("<div>'<%= view %>'</div>")
    var html = view({ image: i.volumeInfo.imageLinks.thumbnail});
    var imgElement = $(html);
    $("#bookshelf").append(imgElement);
    $("div").addClass("book");
  })

  // var spanF = function(){
  //   var starTempl = _.template("<span class='ui-icon ui-icon-star'></span>");
  //   var star = $(starTempl);
  //   $(".book").append(star);
  // }
  //$i.append("<span class='ui-icon ui-icon-star'></span>");

  var highRated =_.filter(response.items, function(i){
    var rating = i.volumeInfo.averageRating;
    var highRated = [];
    if (rating==4 || rating==5){
      i;
    };
  })

  _.each(highRated, function(i){
    $(i.book).append("<span class='ui-icon ui-icon-star'></span>");
  })


    // $("span").addClass("ui-icon ui-icon-star")


  // Inspired by the the urls below:
  //http://stackoverflow.com/questions/6354149/css-divs-overlapping-how-do-i
  //-force-one-above-the-other
  //http://api.jqueryui.com/zIndex/
  //http://philipwalton.com/articles/what-no-one-told-you-about-z-index/
  //http://api.jqueryui.com/theming/icons/


}