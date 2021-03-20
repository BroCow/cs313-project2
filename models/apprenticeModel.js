/** Gets stuff from database **/

// Add 'callback' function, which is the function added to the controller function to return results
function getAllApprentices(callback){
    // gets all apprentices from db

    // make up result that response could equal to start
    // going to be whole array of apprentices
    // Pulled out of function 'getClassList' from controller
    var result = {
        apprentices: [
          {id:1, firstname:"Martin", lastname:"Short"},
          {id:2, firstname:"Steve", lastname:"Martin"},
          {id:3, firstname:"Jack", lastname:"Black"},
          {id:4, firstname:"Shelly", lastname:"Long"},
          {id:5, firstname:"Harrison", lastname:"Ford"},
          {id:6, firstname:"Angelina", lastname:"Jollene"},
          {id:7, firstname:"Super", lastname:"Man"},
          {id:8, firstname:"Dustin", lastname:"Hoffman"}
        ]
      }
      // instead of immediate return, call callback function, which is function added to controller function to wait
      callback(null, result);
}


// takes parameter 'lastname' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function getApprenticeByLastname(lastname, callback){
    console.log("Searching the DB for apprentice: " + lastname);
    // gets apprentice from db that matches that lastname

    // going to be just one apprentice
    // show lastname in result that matches parameter (lastname: lastname)
    // Pulled out of function 'getApprentice' from controller
    var result = {lastname: lastname};

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
}


// takes parameter 'apprenticename' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function insertNewApprentice(firstname, lastname, callback){
    // inserts new apprentice in db with the provided apprentice name

    var result = {success: true};

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
}


// takes parameter 'apprenticeId' and 'classId' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results

function insertApprenticeToClass(apprenticeId, classId, callback){
    // assigns apprentice in db to class with the provided apprentice id and class id

    var result = {success: true};

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
}


// Export functions to be used in controllers
module.exports = {
    getAllApprentices: getAllApprentices,
    getApprenticeByLastname: getApprenticeByLastname,
    insertNewApprentice: insertNewApprentice,
    insertApprenticeToClass: insertApprenticeToClass
  };