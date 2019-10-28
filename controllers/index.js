var debug = require('debug')('old-school:server');

exports.landing = function(req, res, next) {
  res.render('index', { title: 'Express' });
};



exports.email = function(req, res, next) {
  
  debug(req.body.email);
  res.redirect('/');
};
