// all errors caught by async wrapper and sent to error handler - no need for try catch
module.exports.AsyncWrapper = fn => (req, res, next) =>
  fn(req, res).catch(next);
