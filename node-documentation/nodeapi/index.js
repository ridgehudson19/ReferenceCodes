var express = require("express");
var app = express();
var fs = require('fs')

var data =fs.readFileSync('./test.pdf');

app.listen(3090, () => {
 console.log("Server running on port 3090");
});

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
	//res.contentType("application/pdf");
	//res.send(data);
});