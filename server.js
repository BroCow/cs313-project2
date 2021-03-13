//require('dotenv').config();

const express = require('express');
const path = require('path');
//const PORT = process.env.PORT || 5000

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://vxpdladnpzktdo:4b561a7785a31211f719a4ce172b5108e3f5392bb21cb48152c4d069a21475b8@ec2-54-145-102-149.compute-1.amazonaws.com:5432/ddpk9b50ot9r87?ssl=true";
const pool = new Pool({connectionString: connectionString});

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));

app.get("/getApprentice", getApprentice);

app.set("port", (process.env.PORT || 5000));
app.listen(app.get("port"), function(){
  console.log("Now listening for connections on port: ", app.get("port"));
})

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

 function getApprentice(req,res){
  console.log("Getting apprentice information");

  var apprentice_id = req.query.apprentice_id;
  console.log("Retrieving apprentice with apprentice_id: ", apprentice_id);

  getApprenticeFromDb(apprentice_id, function(error, result){
    console.log("Back from the getApprenticeDB function with result:", result);
  });


  var result = {apprentice_id: 238, firstname: "John", lastname: "Smith", birthdate: 1950-02-05};

  res.json(result);
 }

 function getApprenticeFromDb(apprentice_id, callback){
  console.log("getApprenticeFromDb called with apprentice_id:", apprentice_id);

  var sql = "SELECT apprentice_id, firstname, lastname, birthdate FROM apprentice WHERE apprentice_id = $1::int";
  var params = [apprentice_id];

  pool.query(sql, params, function(err, result){
      if(err){
          console.log("An error with the database occurred");
          console.log(err);
      }

      console.log("Found db result:" + JSON.stringify(result.rows));

      callback(null, result.rows);
  });
}
