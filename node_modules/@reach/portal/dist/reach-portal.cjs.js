'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-portal.cjs.prod.js");
} else {
  module.exports = require("./reach-portal.cjs.dev.js");
}
