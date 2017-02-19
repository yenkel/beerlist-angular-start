var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000);

app.get('/', function (req, res) {
  res.send("You are inside the fullstack project")
});
