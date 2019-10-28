var debug = require('debug')('old-school:server');

exports.email = function(req, res, next) {
  
  debug(req.body.email);
  res.redirect('/');
};

