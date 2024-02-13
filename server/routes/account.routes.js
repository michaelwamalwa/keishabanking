const account = require("../controllers/accounts");
const { Router } = require('express')
const router = Router();
const db = require("../models")

module.exports = (app) => {
    app.use("./api/accounts")
}