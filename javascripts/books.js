function handleResponse(response){
  //console.log(response.items);
  _.each(response.items, function(i) {
    //var imageLink = i.volumeInfo.imageLinks.thumbnail;
    var view = _.template("<img src= '<%= image %>' />");
    var html = view({ image: i.volumeInfo.imageLinks.thumbnail});
    var imgElement = $(html);
    $("#bookshelf").append(imgElement);
    $("img").addClass("book");

  })
}
