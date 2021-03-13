//require('dotenv').config();

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const {Pool} = require('pg');
const connectionString = process.env.DATABASE_URL || "postgres://vxpdladnpzktdo:4b561a7785a31211f719a4ce172b5108e3f5392bb21cb48152c4d069a21475b8@ec2-54-145-102-149.compute-1.amazonaws.com:5432/ddpk9b50ot9r87?ssl=true";
const pool = new Pool({connectionString: connectionString});

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  
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
    
