
// Triggered by onclick of button 'Show Apprentices'
function showAllApprentices(){
    console.log("Showing apprentices...");

    var apprentices = $("#apprentices").val(); //value = 'apprentices' which is coded into button
    console.log("Apprentices: " + apprentices); 

    // send request to server using /apprentices endpoint which runs request and related functions
    $.get("/apprentices", function(data){
        // whatever is returned from server stored in 'data'
        console.log("Back from server with: ");
        console.log(data);
        // loop through returned array to display data to html page
        for (var i =0; i<data.apprentices.length; i++){
            var apprentices = data.apprentices[i];
            // div element with id 'ulApprentices' used to display data
            $("#ulApprentices").append("<li>" + apprentices.lastname + ", " + apprentices.firstname + "</li>");
        }
    })
}

// Triggered by onclick of button 'Search Last Name'
function searchLastname(){
    console.log("Searching apprentice...");

    var lastname = $("#lastname").val();
    console.log("Found Apprentice: " + lastname);

    // send request to server
    // pass in parameter for lastname
    $.get("/apprentice", {lastname:lastname}, function(data){
        console.log("Back from server with: ");
        console.log(data);
    })
}

// Triggered by onclick of button 'Search Class'
function searchClass(){
    console.log("Searching class...");
}








  /**** Vanilla Javascript Code ****/
  /*
  var DONE = 4;
  var OKAY = 200;
  var ERROR = {
    "message": "The request failed!"
  };
 
  // Wait for the document to load before binding event handlers further
  document.addEventListener("DOMContentLoaded", function(e){

    // Obtain programmatic reference to the important elements of the page
    var exform = document.getElementById('exform'),
    lastname = document.getElementById('lastname'),
    output = document.getElementById('output');

    // Listen for submission events on the example form
    exform.addEventListener('submit', function(e){

      // Programmatically prevent the form from submitting
      //e.preventDefault();

      // Create a new XMLHttpRequest object and resolve the target URI
      var request = new XMLHttpRequest();
      target = '/lastname?person=' + lastname.value;

      // Open and send a GET request to the target URI
      request.open('GET', target);
      request.send();

      // Listen for changes to the XMLHttpRequest's readyState
      request.onreadystatechange = function(){

        // Do nothing until the request is finished
        if(request.readyState === DONE){

          // Create a div element to hold the output
          var div = document.createElement('div');

          // If the request was successful, append the response
          // If not, append a JSON error object
          if(request.status === OKAY){

            // The most notable difference here is that vanilla JavaScript returns
            // the result of an AJAX request as a string, whereas jQuery attempts
            // to parse JSON responses into a JSON object. 
            div.appendChild(document.createTextNode(request.responseText));
          } else {
            div.appendChild(document.createTextNode(JSON.stringify(ERROR)));
          }

          // Append the div to the output container
          output.appendChild(div);
        }
      };
    });
  });
  */