'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};