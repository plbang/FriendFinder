// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes")(app);



// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });