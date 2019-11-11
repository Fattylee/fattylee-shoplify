var debug = require('debug')('old-school:server');
const models = require('../models');

exports.landing = function(req, res, next) {
  models.lead.findAll({
    /*where: {
      id: '8b03f758-27bd-4146-ac90-6e089eb94cd5',
    }*/
  })
   .then(lead => {
     const leads = lead.map(l =>l.dataValues);
     debug(leads);
     res.render('index', { 
     title: 'Express',
     leads,
     });
     //res.redirect('/');
   })
   .catch(err => {
     debug('Error:', err);
   });
  
};


exports.email = function(req, res, next) {
  
  const {email} = req.body;
  debug( 'email fatty',  models.task);
   models.lead.create({email})
   .then(lead => {
     debug(lead.dataValues);
     res.redirect('/');
   })
   .catch(err => {
     debug('Error:', err);
   });
};