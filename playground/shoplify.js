const Sequelize = require('sequelize');
const debug = require('debug')('shoplify');

const connectionStr = process.env.DATABASE_URL || 'postgres://fattylee:123456@localhost/shoplify';

const sequelize = new Sequelize(connectionStr);

// shop model
class Shop extends Sequelize.Model {}
Shop.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'shop',
  underscored: true
});

// product model
const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
},{
  underscored: true,
})

// relationship
Product.belongsTo(Shop);
Shop.hasMany(Product);

sequelize.sync({force: true})
.then(res => {
  debug('connected!')
})
.catch(debug);