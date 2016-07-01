// Require Modules
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const compression = require('compression');
const path = require('path');
const sass = require('node-sass-middleware');

// Load environment variables from .env file
dotenv.load();

// Setup Express App
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(
    sass({
        src: __dirname + '/sass',
        dest: __dirname + '/public/css',
        prefix: '/css',
        debug: true,
    })
);
app.use(express.static(path.join(__dirname, 'public')));
require('./router/main.js')(app);


// Start Server
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;