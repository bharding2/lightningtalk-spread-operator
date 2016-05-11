module.exports = exports = function auth5(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
