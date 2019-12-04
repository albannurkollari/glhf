const fs = require('fs');
const md5 = require('md5');

const [link1, link2] = fs.readFileSync('./example.txt', {encoding: 'utf8'}).split('\r\n');

const tt = md5(link1);
const ttsmall = tt.slice(0, 6);

console.log(tt);
console.log(ttsmall);

const hashToMD5 = (limit = 6) => {
  try {
    
  }
  catch {
    console.error(`Failed to hash ${url}!`);
  }
}