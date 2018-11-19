// DEPENDENCIES
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware: sets up the Express app to handle data parsing. Allows for formatted JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// A GET route with the URL /api/friends to display JSON of possible friends
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

// A POST route to /api/friends to handle incoming survey results
app.post("/api/friends", function(req,res) {
  console.log(req.body);
})

// require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes")(app);




// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });