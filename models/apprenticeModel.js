/** Gets stuff from database **/

/*
const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log("DB URL: " + db_url);
const pool = new Pool({connectionString: db_url});
*/

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://vxpdladnpzktdo:4b561a7785a31211f719a4ce172b5108e3f5392bb21cb48152c4d069a21475b8@ec2-54-145-102-149.compute-1.amazonaws.com:5432/ddpk9b50ot9r87?ssl=true";
const pool = new Pool({connectionString: connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});






// Add 'callback' function, which is the function added to the controller function to return results
function getAllApprentices(callback){
    // gets all apprentices from db

    // make up result that response could equal to start
    // going to be whole array of apprentices
    // Pulled out of function 'getClassList' from controller
    /*
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
      */

      var sql = "SELECT id, firstname, lastname FROM apprentices";
      

      pool.query(sql, function(err, db_result){

        if(err){
            throw err;
        } else {
            // We got successful result from db
            console.log("Back from db with: ");
            console.log(db_result);

            //create variable that the found rows are dumped into
            var result = {apprentices:db_result.rows};
            console.log("Result variable is: " + result);

            // instead of immediate return, call callback function, which is function added to controller function to wait
            callback(null, result);
        }
      });
}


// takes parameter 'lastname' to be passed to it so it knows what to get
// Add 'callback' function, which is the function added to the controller function to return results
function getApprenticeByLastname(lastname, callback){
    console.log("Searching the DB for apprentice: " + lastname);
    // gets apprentice from db that matches that lastname

    var sql = "SELECT id, firstname, lastname FROM apprentices WHERE lastname=$1::text";
    var params = [lastname];

    pool.query(sql, params, function(err, db_result){
        if(err){
            throw err;
        } else {
            // We got successful result from db
            console.log("Back from db with: ");
            console.log(db_result);

            //create variable that the found rows are dumped into
            var result = {apprentices:db_result.rows};

            // instead of immediate return, call callback function, which is function added to controller function to wait
            callback(null, result);
        }
    })

    // going to be just one apprentice
    // show lastname in result that matches parameter (lastname: lastname)
    // Pulled out of function 'getApprentice' from controller
    /*
    var result = {lastname: lastname};

    // instead of immediate return, call callback function, which is function added to controller function to wait
    callback(null, result);
    */
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