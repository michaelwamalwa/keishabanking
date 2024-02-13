const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mysql = require ("mysql2");// Importing the mysql module
const session = require("express-session");
const { Sequelize, DataTypes } = require("sequelize");
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

//Generate a secret key using crypto
const secret = crypto.randomBytes(64).toString('hex');
const app = express();

const { Router }=require('express');
const router = Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'banking_db',
});
connection.connect((err) => {
  if(err) {
    console.error("Failed to connect to MySQL:" + err.message);
    return;
  }
  console.log("Connected to MySQL database");
});
// Define a function to generate a secret key
const generateSecretKey = () => {
  // Generate a random sequence of bytes and convert it to a hexadecimal string
const secretKey = crypto.randomBytes(32).toString('hex');
return secretKey;// Return the generated secret key
};
const secretKey = generateSecretKey();// Generate a secret key using the generateSecretKey function

//middlewares

app.use(cors());//Allow them cross-origin requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true, // 
  cookie: {
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    secure: false, // Set to false if using HTTP, true if using HTTPS
    maxAge: 1000 * 60 * 60 * 24 // Cookie expiration (set to 1 day here)
  }
}));

//sync database
const db = require('./models');
db.sequelize.sync().then(() => {
console.log('Database Synced')
})
.catch((err) => {
  console.log('Failed to sync database:' + err.message);
});

app.post('/api/register', (req, res) => {//THis is a post request to the signup endpoint
  const firstname = req.body.firstname;//it extracts the value of username, password and role from the request body
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password; //
  const confirmpassword = req.body.confirmpassword;

  const query =`INSERT into logindetails( firstname, lastname, email, password, confirmpassword) VALUES (?,?,?,?,?)`//constructs a SQL query to inser the extracted values to tables details
  connection.query(query, [firstname, lastname, email, password, confirmpassword ], (err, result) => {//It takes the query string as the first parameter and an array containing the extracted values as the second parameter.                                                                                   
    if (err) {//The arrow function passed as the third parameter is the callback function that will be executed once the query is complete.
    console.error('Error executing MySQL query:', err);//there is an error handling logic. If an error occurs during the execution of the query, 
    res.status(500).json({ error: 'Failed to register user' });//it logs the error message to the console and sends a JSON response with a status code of 500 and an error message indicating the failure to register the user.
  } else {
    res.send(result);
  }
});
});

// Endpoint to fetch FAQs
app.get('/api/faqs', (req, res) => {
  // Replace with your logic to fetch FAQs from the database or other data source
  const faqs = [
    { question: 'How do I open a new account?', answer: 'To open a new account, you can visit our nearest branch...' },
    { question: 'How can I reset my online banking password?', answer: 'To reset your online banking password, follow these steps...' },
    // Add more FAQs as needed
  ];
  
  res.json(faqs);
});


// Endpoint to fetch contact details
app.get('/api/contact', (req, res) => {
  // Replace with your logic to fetch contact details from the database or other data source
  const contactDetails = {
    phone: '+254 123-456-7890',
    email: 'support@bank.com',
    officeHours: 'Monday to Friday, 9:00 AM to 5:00 PM',
  };
  
  res.json(contactDetails);
});

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = "SELECT * FROM logindetails WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, result) => {
    if(err){
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Failed to log in' });
    } else {
     if(result.length > 0) {
      const { username, role } = result[0]; // Extract username and role from the result
      res.json({ username, role }); //Send the username and role in the response
     } else {
      res.send({message: "WRONG DETAILS"});
        }
      } 
    });
  });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});