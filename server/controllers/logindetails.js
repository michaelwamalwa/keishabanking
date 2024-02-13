const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
    if (!req.body.username) {
      res.status(400).send({
        message: "content cannot be empty"
      });
      return;
    }
    const logindetails = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      confirmpassword: req.body.confirmpassword,
    };
    User.create(logindetails)
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
  
  // Retrieve all users from the database.
  exports.findAll = (req, res) => {
    const firstname = req.query.firstname;
    var condition = firstname ? { firstname: { [Op.like]: `%${username}%` } } : null;
  
    User.findAll({ where: condition })
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
  
  // Find a single user with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
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
  
  // Update a user by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
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
  
  // Delete a user with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
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
  
  // Delete all users from the database.
  exports.deleteAll = (req, res) => {
    User.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
      res.send({ message: `${nums} users were deleted successfully`});
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Some error occurred while removing all tutorials."
      });
    });
  };
