module.exports = exports = function parse6(req, res, next) {
  console.log('parse from ' + arguments.callee.name);
  next();
}
