const jwt = require('jsonwebtoken');

async function getUserIdFromHeaders(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    console.log('No authorization');
    next('No authorization');
  } else {
    const onlyToken = authorization.slice(7);

    const obj = await jwt.verify(onlyToken, process.env.JWT_SECRET);

    req.userId = obj.id;

    next();
  }
}

module.exports = getUserIdFromHeaders;
