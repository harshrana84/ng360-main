const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' })); // Allow requests from any origin. Adjust as needed.

const directoryPath = path.join(__dirname, '../imaged');

app.get('/getFolders', function (req, res) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    res.json(files);
  });
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
