'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define('lead', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        /*isEmail: {
          args: true,
          msg: 'Enter a valid email.',
        },*/
        emailMe(val) {
          if(val === 'abu')
          throw new Error('uncle me: ' + val);
        },
      }
    } 
  }, {});
  Lead.associate = function(models) {
    // associations can be defined here
  };
  return Lead;
};

