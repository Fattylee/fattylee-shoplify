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

const syncAndSeed = async () => {
  try {
  await sequelize.sync({force: true});
  debug('connected!');
  const shopRes = await Promise.all([
    Shop.create({name: 'Mama put'}),
    Shop.create({name: 'Mama sisi'}),
    Shop.create({name: 'Iya alaje'}),
  ]);
  debug(shopRes.map(s => s.get()));
  
  const productRes = await Promise.all([
    Product.create({name: 'Eba', price: '50', shopId: shopRes[2].id}),
    Product.create({name: 'Fufu', price: '70', shopId: shopRes[2].id}),
    Product.create({name: 'Rice', price: '100', shopId: shopRes[2].id}),
    
    Product.create({name: 'Eba', price: '30', shopId: shopRes[0].id}),
    Product.create({name: 'Fufu', price: '50', shopId: shopRes[0].id}),
    Product.create({name: 'Rice', price: '70', shopId: shopRes[0].id}),
    
    Product.create({name: 'Eba', price: '70', shopId: shopRes[1].id}),
    Product.create({name: 'Fufu', price: '90', shopId: shopRes[1].id}),
    Product.create({name: 'Rice', price: '150', shopId: shopRes[1].id}),
  ]);
  debug(productRes.map(p => p.get()));
  
  
  }
  catch(err) {
    debug(err);
  }
};

syncAndSeed();
