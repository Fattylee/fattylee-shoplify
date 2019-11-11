const debug = require('debug')('postgres');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://fattylee:123456@localhost:5432/test');

const Person = db.define('person', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  favFood: {
    type: Sequelize.STRING, 
    defaultValue: 'meat',
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 4,
      max: 6,
    }
  },
  
  /*full_name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('first_name') + ' ' + this.getDataValue('last_name');
    }
  },*/
  
},{ // model options
  hooks: {
    beforeValidate(instance, option) {
      instance.age = 4;
      
    },
  },
  timestamps: true, // default false
  getterMethods: {
    full_name() { // comes back as part of the return field
      return this.first_name + ' ' + this.last_name;
    }
  },
  instanceMethods: {
    greet() {
      return this.first_name  + ' saus goodmorning!'; 
    },
  },
});

db.sync({force: false /* default false */})
.then(instance => {
  debug('hurray database connected!');
  //return Person.findAll();
  
 return Person.create({
    first_name: 'muh',
    last_name: 'abd',
    age: 6,
    favFood: 'best',
  });
})
.then( person => {
  debug(person);
  //debug('list', person.map(p => p.dataValues));
})
.catch(err => {
  debug('ERR:', err);
});

{
  "description": "tggg",
  "note": "nun",
  "createdAt": 66,
  "amount": 44,
  "owner": "abc",
}