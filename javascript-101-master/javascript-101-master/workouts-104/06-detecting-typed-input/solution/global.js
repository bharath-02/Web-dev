window.addEventListener("load", function(){

  var name_field = document.getElementById("full_name");

  name_field.addEventListener("keyup", function() {

    var greeting_div = document.getElementById("greeting");

    greeting_div.innerHTML = ("Hello there, " + name_field.value + "!");

  });

});