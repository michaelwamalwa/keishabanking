const db = require("../models");
const Account = db.account;
const Op = db.Sequelize.Op;

// Create and Save a new Account
exports.create = (req, res) => {
    if (!req.body.username) {
      res.status(400).send({
        message: "content cannot be empty"
      });
      return;
    }
    const accounts = {
      accountnumber: req.body.accountnumber,
      interstrate: req.body.interestrate,
      associatedcards: req.body.associatedcards,
      linkedservices: req.body.linkedservices,
    };
    Account.create(accounts)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "some error occurred"
      });
    });
  };
  
  // Retrieve all accounts from the database.
  exports.findAll = (req, res) => {
    const accountnumber = req.query.firstname;
    var condition = accountnumber ? { accountnumber: { [Op.like]: `%${accountnumber}%` } } : null;
  
    Account.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "some error occured while retrieving."
      });
    });
  };
  
  // Find a single account with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    Account.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `cannot find User with Id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving with id =" + id
      });
    });
  };
  
  // Update an account by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Account.update(req.body, {
      where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message :"User was updated."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}.` 
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Eror updating with id=" + id
      });
    });
  };
  
  // Delete an account with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    Account.destroy({
      where: { id: id }
    })
  .then(num => {
    if(num == 1) {
      res.send({
        message: `cannot delete User with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "could not delete User with id="  + id
    });
  });
  };
  
  // Delete all accounts from the database.
  exports.deleteAll = (req, res) => {
    Account.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
      res.send({ message: `${nums} accounts were deleted successfully`});
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while removing all accounts."
      });
    });
  };
