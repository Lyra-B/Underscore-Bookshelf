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

  _.filter(response.items, function(i){
  var rating = i.volumeInfo.averageRating;
  if (rating==4 || rating==5){return i};
  })
}