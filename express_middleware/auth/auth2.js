module.exports = exports = function auth2(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
