var express = require("express");
var route3 = express.Router();

route3.get('/:tenCourse/:tenbai', (req, res) => {
    res.send(req.params)
})



module.exports = route3
