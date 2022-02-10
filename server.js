const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8000;

// Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// TODO: read gallery folder using fs, and then create a JSON file that lists the file's names and file path, so we can use for website's gallery


// Render pages here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Init app
app.listen(port);
console.log('Server started at http://localhost:' + port);
