// Step 1
var express = require('express')
// Step 2
var bodyParser = require('body-parser')
var app = express()
// Step 3
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// POST Listener
app.post('/demo', (req,res) => {
	console.log(req.body.username)
	console.log(req.body.password)
	res.end()
})
// Listen on Port
app.listen(3000, () => {
console.log("server is runnig.")
})