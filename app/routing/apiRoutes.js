// Dependencies
var friends = require("../data/friends");
// Need var = friends in order to get the friends data from friends.js

// Takes app as a parameter
module.exports = function(app) {

  // A GET route with the URL /api/friends to display JSON of possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // A POST route to /api/friends to handle incoming survey results
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
  });
};
