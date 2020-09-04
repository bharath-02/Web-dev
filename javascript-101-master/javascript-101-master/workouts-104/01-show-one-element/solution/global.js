window.addEventListener("load", function(){

  // 1. Get the DOM element which will be clicked.
  var more_link = document.getElementById("more_text_link");

  // 2. Add a listener for the 'click' event onto that element.
  more_link.addEventListener("click", function(){

    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.
    var more_text = document.getElementById("more_text_content");

    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    more_text.style.display = "inline";

    // 5. Also modify the DOM to hide the "More info..." link.
    more_link.style.display = "none";
  });
  
});