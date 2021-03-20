
const apprenticeModel = require("../models/apprenticeModel");

// function from "/apprentices" in server.js
function getApprenticeList(req, res){
    // get the list of all apprentices
    console.log("Getting all apprentices...");

    // Callback function added so it doesn't block program while fetching
    apprenticeModel.getAllApprentices(function(error, result){
        //return result to user, after it is finished being retrieved from database
        res.json(result);
    });
}


// function from "/apprentice" in server.js
function getApprentice(req, res){
    // optional, used with API's - get parameter from user
    //app.get("/apprentice/:id", function(req, res){
      // get a single apprentice by id
      console.log("Getting one apprentice...");
    
      // to get parameter 'lastname' (/apprentice?lastname=Short)
      var lastname = req.query.lastname;
      console.log("Getting apprentice with lastname: " + lastname);
    
      // optional, used with API's - get parameter from user
      //var lastname = req.params.lastname;
    
    // Callback function added so it doesn't block program while fetching
    apprenticeModel.getApprenticeByLastname(lastname, function(error, result){
        // return result to user, after it is finished being retrieved from database
        res.json(result);
    });  
}


// function from "/addApprentice" in server.js
function postApprentice(req, res){
    console.log("Adding a new apprentice");
  
    // parsed by 'app.use(urlextended)' to get variables from url
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    console.log("Creating new apprentice with name: " + lastname + ", " + firstname);
  
    //create variable to store result from model function - pass it class name (variable deleted after adding callback)
    // Callback function added so it doesn't block program while fetching
    apprenticeModel.insertNewApprentice(firstname, lastname, function(error, result){
        res.json(result);
    });
  }


  // function from "/assignApprenticeToClass" in server.js
  function postApprenticeToClass (req, res){
      console.log("Assigning apprentice to class...");

      var apprenticeId = req.body.apprenticeId;
      var classId = req.body.classId;

      apprenticeModel.insertApprenticeToClass(apprenticeId, classId, function(error, result){
          res.json(result);
      });  
  }
  

// Export functions to be called in server.js endpoints
module.exports = {
    getApprenticeList: getApprenticeList,
    getApprentice: getApprentice,
    postApprentice: postApprentice,
    postApprenticeToClass: postApprenticeToClass
  };