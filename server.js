//require('dotenv').config();

const express = require('express');
const path = require('path');
//const PORT = process.env.PORT || 5000

const classController = require("./controllers/classController");
const apprenticeController = require("./controllers/apprenticeController");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://vxpdladnpzktdo:4b561a7785a31211f719a4ce172b5108e3f5392bb21cb48152c4d069a21475b8@ec2-54-145-102-149.compute-1.amazonaws.com:5432/ddpk9b50ot9r87?ssl=true";
const pool = new Pool({connectionString: connectionString, 
  ssl: {
    rejectUnauthorized: false
  }
});

 
const app = express()
app.use(express.static(path.join(__dirname, 'public')));
// parses things that are within the body for us - supports URL encoded bodies
app.use(express.urlencoded({extended:true}));
// supports json encoded bodies
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index')); 

//app.get("/getApprentice", getApprentice);

app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
  console.log("Now listening for connections on port: ", app.get("port"));
})


app.get("/classes", classController.getClassList);
app.get("/class", classController.getClass);
app.post("/addClass", classController.postClass);

app.get("/apprentices", apprenticeController.getApprenticeList);
app.get("/apprentice", apprenticeController.getApprentice);
app.post("/addApprentice", apprenticeController.postApprentice);

// Change this to .post
app.get("/apprentice_class", apprenticeController.getApprenticeToClass);      // Passes lastname and classname from project2.js to controller




//app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  /*
  var sql = "SELECT * FROM apprentice";

  pool.query(sql, function(err, result) {
      // If an error occurred...
      if (err) {
          console.log("Error in query: ")
          console.log(err);
      }
  
      // Log this to the console for debugging purposes.
      console.log("Back from DB with result:");
      console.log(result.rows);
  
  
  });   
  */

/*
 function getApprentice(req,res){
  console.log("Getting apprentice information");

  var lastname = req.query.lastname;
  console.log("Retrieving apprentice with lastname: ", lastname);

  getApprenticeFromDb(lastname, function(error, result){
    console.log("Back from the getApprenticeDB function with result:", result);

    
    if (error || result == null || result.length != 1){
      res.status(500).json({success:false, data: error});
    } else {
        var tranfer_params = result[0];

        //res.render("pages/result", tranfer_params);
        
        res.json(result[0]);
    }
  });
 }

 function getApprenticeFromDb(lastname, callback){
  console.log("getApprenticeFromDb called with lastname:", lastname);

  var sql = "SELECT apprentice_id, firstname, lastname, birthdate FROM apprentice WHERE lastname = $1::varchar";
  var params = [lastname];

  pool.query(sql, params, function(err, result){
      if(err){
          console.log("An error with the database occurred");
          console.log(err);
      }

      console.log("Found db result:" + JSON.stringify(result.rows));

      callback(null, result.rows);
  });
}

app.get('/data', function(req, res){

  // Retrieve the person from the URI query string
  let lastname = request.query.lastname;

  // If there is a person, and the raw JSON data has such a key, return the
  // associated data.
  // If there is no person, or the raw JSON data has no such key, return
  // an error object.
  if(lastname !== undefined && data.hasOwnProperty(lastname)){
    res.json(data[lastname]);
  } else {
    res.json(data['error']);
  }

  // End the response
  res.end();
});
*/






