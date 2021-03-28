/** Functions included with endpoints here (/classes, function(req, res)) **/

const classModel = require("../models/classModel");

// function from "/classes" in server.js
function getClassList(req, res){
    // get the list of all classes
    console.log("Getting all classes...");

    //create variable to store result from model function
    // Callback function added so it doesn't block program while fetching
    classModel.getAllClasses(function(error, result){
        //return result to user, after it is finished being retrieved from database
        res.json(result);
    });
  }

  // function from "/class" in server.js
  function getClass(req, res){
    // optional, used with API's - get parameter from user
    //app.get("/class/:id", function(req, res){
      // get a single class by id
      console.log("Getting one class...");
    
      // to get parameter 'name' (/class?name=Structured Cabling)
      var classname = req.query.classname;
      console.log("Getting class with name: " + classname);
    
      // optional, used with API's - get parameter from user
      //var name = req.params.name;
    
    //create variable to store result from model function - pass it the id (variable deleted after adding callback)
    // Callback function added so it doesn't block program while fetching
    classModel.getClassByClassname(classname, function(error, result){
        // return result to user, after it is finished being retrieved from database
        res.json(result);
    });  
    }

    // function from "/addClass" in server.js
    function postClass(req, res){
        console.log("Adding a new class");
      
        // parsed by 'app.use(urlextended)' to get variables from url
        var classname = req.body.classname;
        console.log("Creating new class with name: " + classname);
      
        //create variable to store result from model function - pass it class name (variable deleted after adding callback)
        // Callback function added so it doesn't block program while fetching
        classModel.insertNewClass(classname, function(error, result){
            res.json(result);
        });
      }

      // Export functions to be called in server.js endpoints
      module.exports = {
        getClassList: getClassList,
        getClass: getClass,
        postClass: postClass
      };

    