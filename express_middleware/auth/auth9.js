module.exports = exports = function auth9(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
