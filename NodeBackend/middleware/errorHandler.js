const errorHandler = (err, req, res, next) => {
  // console.log(res);
  let message = err.message;
  let code = res.statusCode;
  res.status(code).json({
    sucess: false,
    message: message,
  });
};

module.exports = errorHandler;
