module.exports = (sequelize, Sequelize) => {
const User = sequelize.define("logindetails", {
        firstname: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        lastname: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        confirmpassword: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          
      });
      
 return User;
    }