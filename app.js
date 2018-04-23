const express = require('express');
const mongoose = require('mongoose');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const app = express();
const config = require('./config/config');

// Set up middlewatre for serving static content from /assets
app.use('/', express.static(__dirname + '/public'));
// Set up template engine
app.set('view engine', 'ejs');
// Cors config
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Auth config
// app.use(basicAuth({ authorizer: myAuthorizer }))

// const myAuthorizer = (username, password) => {
//     return User.findOne({ 'username': username }, (err, user) => {
//         if (err) {
//             throw err;
//         }
//         else {
//             return user.authenticate(password); // returns true 
//         }
//     });
// }


// DB connection 
mongoose.connect(config.mongoUrl);

setupController(app);
apiController(app);

app.listen(3000);