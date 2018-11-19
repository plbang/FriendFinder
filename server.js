// DEPENDENCIES
var express = require("express");
var path = require("path");


// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware: sets up the Express app to handle data parsing. Allows for formatted JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Passes in the app on line 7 into the funtion
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });