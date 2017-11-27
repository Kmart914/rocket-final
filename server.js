const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/27017",
  {
    useMongoClient: true
  }
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/", (req, res) => {
   db.User.create({}). then( () => {
      
   })
}

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
