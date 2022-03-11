const jwt = require("jsonwebtoken");

/**
 * Verify that the token is valid and if so, pass the user object to the next middleware
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function in the middleware chain.
 * @returns The user object is being returned.
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

/**
 * If the user is not the same as the user in the URL or the user is an admin, then the user is allowed
 * to proceed. Otherwise, the user is not allowed to proceed
 * @param req - The request object.
 * @param res - The response object.
 * @param next - a function that will be called if the token is valid.
 */
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

/**
 * If the user is an admin, continue on to the next middleware. Otherwise, return a 403 error
 * @param req - The request object.
 * @param res - The response object.
 * @param next - a callback function that will be executed after the token is verified.
 */
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};