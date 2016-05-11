module.exports = exports = function auth4(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
