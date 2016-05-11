module.exports = exports = function parse5(req, res, next) {
  console.log('parse from ' + arguments.callee.name);
  next();
}
