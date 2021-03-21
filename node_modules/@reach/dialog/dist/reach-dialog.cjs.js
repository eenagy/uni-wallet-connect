'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-dialog.cjs.prod.js");
} else {
  module.exports = require("./reach-dialog.cjs.dev.js");
}
