module.exports = exports = function parse2(req, res, next) {
  console.log('parse from ' + arguments.callee.name);
  next();
}
