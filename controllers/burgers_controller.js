var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

//EXPRESS GET ROUTE
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data.all,
      burgersNotDevoured: data.notDevoured,
      burgersDevoured: data.devoured
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//EXPRESS POST ROUTE
router.post("/burgers", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(data) {
    res.redirect("/");
  });
});

//EXPRESS PUT ROUTE
router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function(data) {
      res.redirect("/");
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
