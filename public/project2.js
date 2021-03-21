
/****** FUNCTIONS FOR APPRENTICES SECTION *********/

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

        $("#allApprentices").append("<h3>Apprentices Currently Registered</h3>");

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

        $("#searchApprentice").append("<h3>Apprentice Search Result</h3>");

        // loop through returned array to display data to html page
        for (var i=0; i<data.apprentices.length; i++){
          var searchResult = data.apprentices[i];
          // div element with id 'ulApprentice' used to display data
          $("#ulApprentice").append("<li>" + searchResult.lastname + ", " + searchResult.firstname + "</li>");
      }
    })
}

// Triggered by onclick of button 'Register Apprentice'
function addApprentice(){
    console.log("Adding Apprentice...");

    var firstname = $("#addFirstname").val();
    var lastname = $("#addLastname").val();
    console.log("Requested Add for: " + lastname + ", " + firstname);

    $.post("/addApprentice", {firstname:firstname, lastname:lastname}, function(data){
      console.log("Post received by server with: ");
      console.log(data);

      $("#addApprentice").append("<p id='addedMessage'><strong>Apprentice " + firstname + " " + lastname + " added to database!</strong></p>");
    })
}


/****** FUNCTIONS FOR CLASSES SECTION *********/

// Triggered by onclick of button 'Show Classes'
function showAllClasses(){
  console.log("Showing classes...");

  var classes = $("#classes").val(); //value = 'classes' which is coded into button
  console.log("Classes: " + classes); 

  // send request to server using /classes endpoint which runs request and related functions
  $.get("/classes", function(data){
      // whatever is returned from server stored in 'data'
      console.log("Back from server with: ");
      console.log(data);

      $("#allClasses").append("<h3>Classes Currently Available</h3>");

      // loop through returned array to display data to html page
      for (var i =0; i<data.classes.length; i++){
          var classes = data.classes[i];
          // div element with id 'ulClasses' used to display data
          $("#ulClasses").append("<li>" + classes.name + "</li>");
      }
  })
}


// Triggered by onclick of button 'Search Class'
function searchClassname(){
  console.log("Searching class...");

  var classname = $("#classname").val();
  console.log("Found Class: " + classname);

  // send request to server
  // pass in parameter for lastname
  $.get("/class", {classname:name}, function(data){ 
      console.log("Back from server with: ");
      console.log(data);

      $("#searchClass").append("<h3>Class Search Result</h3>");

      // loop through returned array to display data to html page
      for (var i=0; i<data.classes.length; i++){
        var searchResult = data.classes[i];
        // div element with id 'ulClass' used to display data
        $("#ulClass").append("<li>" + searchResult.name + ", " + "</li>");
    }
  })
}
