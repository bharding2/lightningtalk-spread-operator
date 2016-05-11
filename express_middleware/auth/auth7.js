module.exports = exports = function auth7(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
