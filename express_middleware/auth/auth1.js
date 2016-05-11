module.exports = exports = function auth1(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
