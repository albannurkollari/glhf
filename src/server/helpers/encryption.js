// Libraries
require('dotenv/config');
const crypto = require('crypto');

const {ENCRYPTION_ALGORITHM} = process.env;
const IV_HEX = 'hex';

const decrypt = ({data, iv} = {}) => {
  debugger;
  try {
    const decipher = crypto.createDecipheriv(
      ENCRYPTION_ALGORITHM,
      Buffer.from(key),
      Buffer.from(iv, IV_HEX)
    );
    const decrypted = decipher.update(Buffer.from(data, IV_HEX));

    return Buffer.concat([decrypted, decipher.final()]).toString();
  }
  catch (error) {
    console.log(error);
    console.log(`Failed to decrypt ${url}`);
  }
};

const encrypt = url => {
  debugger;
  console.log(ENCRYPTION_ALGORITHM);
  try {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, Buffer.from(key), iv);
    const encrypted = cipher.update(url);

    return {
      iv: iv.toString(IV_HEX),
      data: Buffer.concat([encrypted, cipher.final()]).toString(IV_HEX)
    };
  }
  catch (error) {
    console.log(error);
    console.log(`Failed to encrypt ${url}`);  
  }
};

module.exports = {decrypt, encrypt};
