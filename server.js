const express = require('express');
const app = express();
const path = require('path');
const port = 3333
app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port, () => {
  // console.log(`Companion-app listening at http://192.168.1.167:${port}`)
  console.log("Copmanion-app started and listening on port 3333")
})