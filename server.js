const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/eloRatingSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.listen(port, () => console.log(`Listening on port \$\{port\}`) );