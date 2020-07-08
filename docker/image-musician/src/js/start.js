// How I enabled ES6 : 
// https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/
require = require("esm")(module);

module.exports = require("./app.js");
