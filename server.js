const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models');
const routes = require('./routes');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

// Add routes, both API and view
// app.use("/", routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/rlitems",
  {
    useMongoClient: true
  }
);

mongoose.connection.on('connected', function(){
  console.log('mongoose is connected');
});

mongoose.connection.on('error', function(err) {
   conosle.log('error: ', err);
});

app.get("/", (req, res) => {
  db.User.create({ name: "someName", image_source: "someImage"}).then( () => {
     console.log("Supbruh");
  })
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.get("/dbstuff", (req, res) => {
//    db.User.create({ name: "someName", image_source: "someImage"}).then( () => {
//       console.log("Supbruh");
//    })
// }

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});