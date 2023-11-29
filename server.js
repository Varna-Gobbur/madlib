// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST requests to '/'
app.post('/', (req, res) => {
  // Access form data from req.body
  const { color1, color2, adjective1, pluralNoun, place } = req.body;

  // Your mad lib logic here
  const madLib = `Once upon a time in a land of ${color1} and ${color2}, there lived a ${adjective1} group of ${pluralNoun}. One day, they decided to embark on a journey to the enchanting ${place}. The landscape was painted with hues of ${color1} and ${color2}, creating a magical and ${adjective1} atmosphere. It was a truly ${adjective1} adventure!`;

  // Send the filled-in mad lib as the response
  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
