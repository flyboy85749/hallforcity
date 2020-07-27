console.log("Does this work?");

// I want to select the vote button, and count the votes, and display them on the top of the page.
$(document).ready(function() {

    let count = 0;
    $(".vote").on("click", function() {
        count ++; 
      $("#votes").text(`****** Unofficially, Caryn has ${count} votes! ******`)
    });

  });

  