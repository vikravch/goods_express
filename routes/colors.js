var express = require("express");
var router = express.Router();

var colors = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
  { id: 3, name: "blue" },
];

router.get("/", function (req, res, next) {
  res.send(colors);
});

module.exports = router;
