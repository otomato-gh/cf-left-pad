module.exports = leftpad;
var pjson = require('./package.json');

function leftpad (str, len, ch) {
  console.log(pjson.name+"-"+pjson.version);
  str = String(str);
  
  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}
