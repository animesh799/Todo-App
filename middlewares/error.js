class ErrorHandler extends Error {
  //extending old error class to get the statu code also
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandelingMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    status: false,
    message: err.message,
  });
};

export default ErrorHandler;
