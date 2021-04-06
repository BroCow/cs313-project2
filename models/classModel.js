/** Gets stuff from database, passes to controller so it can do its job **/

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://vxpdladnpzktdo:4b561a7785a31211f719a4ce172b5108e3f5392bb21cb48152c4d069a21475b8@ec2-54-145-102-149.compute-1.amazonaws.com:5432/ddpk9b50ot9r87?ssl=true";
const pool = new Pool({connectionString: connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});

// Add 'callback' function, which is the function added to the controller function to return results
function getAllClasses(callback){
    // gets all classes from db


    // make up result that response could equal to start
    // going to be whole array of classes
    // Pulled out of function 'getClassList' from controller
    /*
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
      */

     var sql = "SELECT id, classname FROM classes";

     pool.query(sql, function(err, db_result){

      if(err){
          throw err;
      } else {
          // We got successful result from db
          console.log("Back from db with: ");
          console.log(db_result);

          //create variable that the found rows are dumped into
          var result = {classes:db_result.rows};
          console.log("Result variable is: " + result);

          // instead of immediate return, call callback function, which is function added to controller function to wait
          callback(null, result);
      }
    });

      // sends db results to controller function
      //return result;

      // instead of immediate return, call callback function, which is function added to controller function to wait
      //callback(null, result);
}


// takes parameter 'id' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function getClassByClassname(classname, callback){
  console.log("Searching the DB for class: " + classname);
    // gets class from db that matches that name

    var sql = "SELECT id, classname FROM classes WHERE classname=$1::text OR lower(classname)=$1::text OR upper(classname)=$1::text";
    var params = [classname];

    pool.query(sql, params, function(err, db_result){
      if(err){
          throw err;
      } else {
          // We got successful result from db
          console.log("Back from db with: ");
          console.log(db_result);

          //create variable that the found rows are dumped into
          var result = {classes:db_result.rows};

          // instead of immediate return, call callback function, which is function added to controller function to wait
          callback(null, result);
      }
  })

    // going to be just one class
    // show id in result that matches parameter (id: id)
    // Pulled out of function 'getClass' from controller
    /*
    var result = {id:id, name:"Fire Alarm"};

    // sends db results to controller function
    //return result;

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
    */
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
    getClassByClassname: getClassByClassname,
    insertNewClass: insertNewClass
  };