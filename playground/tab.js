const debug = require('debug')('tab');
const Sequelize = require('sequelize');

const conn = new Sequelize('postgres://fattylee:123456@localhost/test');

class B extends Sequelize.Model {}
B.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
  }
},{
  sequelize: conn,
  modelName: 'Bookk',
  underscored: true,
  force: true,
})
class A extends Sequelize.Model {}
A.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  namE: Sequelize.STRING,
}, {
  force: true,
  underscored: true,
  modelName: 'atab',
  sequelize: conn,
});
A.getAll = async function () {
  //const res = await this.findAll();
  //debug(res);
//return res;
return this.findAll({include: [B]});
};

A.belongsTo(B, {
  //underscored: true,
  //as: 'babu',
 // foreignKey: 'bay'
});
B.hasMany(A);

const syncAndSeed = async () => {
  const connRes = await conn.sync();
  debug('connection started');
  const [...rest] = await Promise.all([
  B.create({age: 20}),
  B.create({age: 30}),
   B.create({age: 50}),
  ]);
  const [first, mid, last] = await Promise.all([
  A.create({namE: 'abu lulu'}),
  A.create({namE: 'ummu bubu'}),
  A.create({namE: 'lazy pap', BookkId: rest[2].get().id}),
  ]);
  const bRes = await B.findAll()
  //debug(bRes.map(e => e.dataValues));
  //debug(bRes.map(e => e.get()));
  //debug(last.get());
  //debug(JSON.stringify((await A.getAll()).map(e => e.get()), null, 2));
  debug(JSON.stringify((await B.findAll({include: [A]})).map(e => e.get()), null, 2));
}

syncAndSeed();