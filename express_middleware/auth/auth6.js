module.exports = exports = function auth6(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
