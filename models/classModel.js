/** Gets stuff from database, passes to controller so it can do its job **/

// Add 'callback' function, which is the function added to the controller function to return results
function getAllClasses(callback){
    // gets all classes from db


    // make up result that response could equal to start
    // going to be whole array of classes
    // Pulled out of function 'getClassList' from controller
    var result = {
        classes: [
          {id:1, name:"Structured Cabling"},
          {id:2, name:"Fiber Optics"},
          {id:3, name:"Codes and Practices"},
          {id:4, name:"DC Theory"},
          {id:5, name:"AC Theory"},
          {id:6, name:"Nurse Call"},
          {id:7, name:"Fire Alarm"},
          {id:8, name:"Paging"}
        ]
      }

      // sends db results to controller function
      //return result;

      // instead of immediate return, call callback function, which is function added to controller function to wait
      callback(null, result);
}


// takes parameter 'id' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function getClassById(id, callback){
    // gets class from db that matches that id


    // going to be just one class
    // show id in result that matches parameter (id: id)
    // Pulled out of function 'getClass' from controller
    var result = {id:id, name:"Fire Alarm"};

    // sends db results to controller function
    //return result;

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
}


// takes parameter 'classname' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function insertNewClass(classname, callback){
    // inserts new class in db with the provided class name

    var result = {success: true};

    //return result;

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
}


// Export functions to be used in controllers
module.exports = {
    getAllClasses: getAllClasses,
    getClassById: getClassById,
    insertNewClass: insertNewClass
  };