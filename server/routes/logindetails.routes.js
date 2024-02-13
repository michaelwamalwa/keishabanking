const user = require("../controllers/logindetails");
const { Router }=require('express')
const router = Router();
const db = require("../models")


module.exports = (app) => {
 app.use('/api/details', router);
};
