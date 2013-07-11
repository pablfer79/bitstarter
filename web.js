var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');



app.get('/', function(request, response) {
  var buf = fs.readFile('index.html');
  if (!buf){
      console.log("No hay buf");
  } else {
      response.send(fs.readFile(buf.toString());
}
});		   

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
