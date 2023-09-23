const errorHandler = (err, req, res, next) => {
  // console.log(res);
  //console.log(err);
  if (err.name == 'CastError') {
    return res.status(400).json({
      sucess: false,
      message: 'Bad Mongoose Object Id',
    });
  }
  let message = err.message;
  let code = res.statusCode ? res.statusCode : 500;
  res.status(code).json({
    sucess: false,
    message: message,
  });
};

module.exports = errorHandler;
