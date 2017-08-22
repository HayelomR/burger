//get express
var express = require("express");
//get router
var router = express.Router();
//get the burger
var burger = require("../models/burger.js");
// Get all burgers in burger database and render on page.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// when new burger is created send it to data base.
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
    ], [
    req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/");
    });
});

//update database while you are updating the page
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
// let the customer beable to delate what the type if they don,t like it
router.delete("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function() {
    res.redirect("/");
  });
});
// Export so that it can be used to on server.js
module.exports = router;
