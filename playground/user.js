const Sequelize = require('sequelize');

// connection string
let uri = 'mariadb://localhost/test';
//uri = 'postgres://fattylee:123456@localhost:5432/test';
const sequelize = new Sequelize(uri);

// user model
class User extends Sequelize.Model {}

User.init({
  username: Sequelize.STRING,
},{
  sequelize,
  modelName: 'user',
  underscored: true,
});

// book
class Book extends Sequelize.Model {}

Book.init({
  name: Sequelize.STRING,
},{
  sequelize,
  modelName: 'book',
  underscored: true,
  onDelete: Sequelize.CASCADE,
  timestamps: false,
});

//Book.belongsTo(User);
//User.hasMany(Book);
Book.belongsTo(User, {
  as: 'papa', 
  //foreignKey: 'papaKay',
  });
//Book.hasMany(User);
//User.belongsTo(Book);
//User.hasOne(Book);

//sequelize.sync({force: true})
//sequelize.sync()
sequelize.sync({force: true})
.then( async res => {
  console.log('connected successfully');
  console.log(await Book.findAll());
})
.catch(err => {
  console.log('Something went wrong', err);
});