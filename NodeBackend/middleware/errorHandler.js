const errorHandler = (err, req, res, next) => {
  let message = err.message;
  let code = res.statusCode;
  res.status(code).json({
    message: message,
  });
};

module.exports = errorHandler;
