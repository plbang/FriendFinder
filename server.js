// DEPENDENCIES
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes")(app);


// A GET route with the URL /api/friends to display JSON of possible friends
app.get("/api/friends", function(req, res) {
  res.json(friends);
});


// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });