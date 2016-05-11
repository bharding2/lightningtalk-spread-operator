module.exports = exports = function auth10(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
