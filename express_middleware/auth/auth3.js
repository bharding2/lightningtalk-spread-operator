module.exports = exports = function auth3(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
