
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

    if(document.getElementById("h3_apSearchResult") !== null){
      document.getElementById("h3_apSearchResult").style.display="none";
    }
    
    var lastname = $("#lastname").val();
    console.log("Found Apprentice: " + lastname);
    
    // send request to server
    // pass in parameter for lastname
    $.get("/apprentice", {lastname:lastname}, function(data){ 
        console.log("Back from server with: ");
        console.log(data);

        if(data.apprentices.length > 0){
          $("#searchApprentice").append("<h3 id='h3_apSearchResult'>Apprentice Search Result</h3>");

          // loop through returned array to display data to html page
          for (var i=0; i < data.apprentices.length; i++){
            var searchResult = data.apprentices[i];
            // div element with id 'ulApprentice' used to display data
            $("#ulApprentice").append("<li>" + searchResult.lastname + ", " + searchResult.firstname + "</li>");
          }
        } else {
          $("#searchApprentice").append("<p>No results found for " + '"' + lastname + '"' + "</p>");
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
          $("#ulClasses").append("<li>" + classes.classname + "</li>");
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
  $.get("/class", {classname:classname}, function(data){ 
      console.log("Back from server with: ");
      console.log(data);

      if(data.classes.length > 0){
        $("#searchClass").append("<h3>Class Search Result</h3>");
        // loop through returned array to display data to html page
        for (var i=0; i<data.classes.length; i++){
          var searchResult = data.classes[i];
          // div element with id 'ulClass' used to display data
          $("#ulClass").append("<li>" + searchResult.classname + "</li>");
        }
      } else {
        $("#searchClass").append("<p>No results found for " + '"' + classname + '"' + "</p>");
      }
      
  })
}


/****** FUNCTIONS FOR ASSIGNING APPRENTICES TO CLASS *********/
function requestApprenticeToClass(){
  console.log("Beginning assignment process...");

  var roster = $("#roster").val();
  console.log("Creating roster: " + roster);

  var rosterLastname = $("#rosterLastname").val();
  console.log("Found Apprentice: " + rosterLastname);

  var rosterClassname = $("#rosterClassname").val();
  console.log("Found Class: " + rosterClassname);

  //CHANGE THIS TO .POST
  $.get("/apprentice_class", {rosterLastname:rosterLastname, rosterClassname:rosterClassname}, function(data){
    console.log("Arrived at /apprentice_class");

    $("#rosterSuccessMessage").append("<p id='p_rosterSuccess'><strong>Apprentice added to class!</strong></p>");
  })

  // Values from user passed as parameters to /assignApprenticeToClass in server.js
  /*
  $.get("/assignApprenticeToClass", {lastname:lastname}, {classname:classname}, function(data){
    console.log("Back from server with: ");
    console.log(data);
  })
  */
}


function selectApprenticesForClass(){
  console.log("Apprentices selected...");

  var checkArray = new Array(); 
  $('input[type=checkbox]').each(function () {
      if (this.checked) checkArray.push(this.id)
  });

  console.log(checkArray);

}


/**** FUNCTIONS FOR SHOWING/HIDING SECTIONS ****/
function toggleApprentice() {
  var x = document.getElementById("apprenticeSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleClass() {
  var x = document.getElementById("classSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleRoster() {
  var x = document.getElementById("rosterSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


