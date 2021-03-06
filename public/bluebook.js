

function loadDoc() {
    var xhttp = new XMLHttpRequest(); //This creates a XMLHttpRequest object - keystone of Ajax
    xhttp.onreadystatechange = function() { // "onreadystatechange" defines function to be called when the readyState property changes
      if (this.readyState == 4 && this.status == 200) {
          // readyState Code
            // 0:request not initialized
            // 1:server connection established
            // 2:request received
            // 3:processing request
            // 4:request finished and response is ready
        // status
            // Returns status-number of request
                //200: ok
                //403: forbidden
                //404: not found
       document.getElementById("demo").innerHTML = this.responseText; //responseText returns response data as string
      }
    };
    xhttp.open("GET", "ajax.xml", true);
    // "open" specifies type of request (method, url, async) 
        // "True" is for asychronus, false would be for synchronus
    xhttp.send();  
    //send() sends request to server (used for GET)
  }


  /**** Vanilla Javascript Code ****/
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