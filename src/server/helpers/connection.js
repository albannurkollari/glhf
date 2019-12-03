const {connect: connectDB} = require('mongoose');

module.exports = ({DB_CRED_PLACEHOLDER, DB_USER, DB_PASS, DB_CONNECTION} = {}) => {
  if (!DB_CRED_PLACEHOLDER || !DB_USER || !DB_PASS || !DB_CONNECTION) {
    return false;
  }

  const user = encodeURIComponent(DB_USER);
  const pass = encodeURIComponent(DB_PASS);
  const connection = DB_CONNECTION.replace(DB_CRED_PLACEHOLDER, `${user}:${pass}`).trim();
  const options = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true};

  return new Promise(async resolve => {
    try {
      await connectDB(connection, options, err => resolve(err ? false : true));
    }
    catch (error) {
      console.log(error);
    }

    resolve(false);
  });
}
