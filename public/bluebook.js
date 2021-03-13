

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