module.exports = (sequelize, Sequelize) => {;
    const Account = sequelize.define("accounts", {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    accountnumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  interestrate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
    });
    const AssociatedCard = sequelize.define('AssociatedCard', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    const LinkedService = sequelize.define('LinkedService', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

Account.belongsToMany(AssociatedCard, { through: 'AccountAssociatedCards' });
Account.belongsToMany(LinkedService, { through: 'AccountLinkedServices' });

    return Account;
};