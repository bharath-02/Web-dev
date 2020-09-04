window.addEventListener("load", function(){

  var button = document.getElementById('toggle_button');

  button.addEventListener("click", function() {

    var movieList = document.querySelectorAll("ul.second_five li");

    for (var i = 0; i < movieList.length; i++) {
      if (movieList[i].style.display === "list-item") {
        movieList[i].style.display = "none";
      }
      else {
        movieList[i].style.display = "list-item";
      }
    }

  });

});
