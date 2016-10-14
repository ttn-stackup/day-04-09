// Loads express module and assigns it to a var called express
var express = require('express');
// Creates an instance of the express module
var app = express();

// Defines a port to listen to
const PORT = process.argv[2] || 3000;

// Serves static files from public directory.
// __dirname is the absolute path of the application directory
app.use(express.static(__dirname + '/../client'));

// Router for GET /about
app.get('/about', function(req, res, next){
    console.log('About ACME');
    next();
});

// Accommodates request on route /about by any method
app.use('/about', function(req, res){
    res.send('About ACME');
});

// Handles 404. In Express, 404 responses are not the result of an error,
// so the error-handler middleware will not capture them.
// To handle a 404 response, add a middleware function at the very bottom of the stack
// (below all other functions)
app.use(function(req, res, next) {
    res.status(404).redirect('/404.html');
});

// Starts the server on localhost (default)
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT);
});