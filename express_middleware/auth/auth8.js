module.exports = exports = function auth8(req, res, next) {
  console.log('auth from ' + arguments.callee.name);
  next();
}
