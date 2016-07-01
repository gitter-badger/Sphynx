// Require NPM Modules
const express = express();

// Initialise Express App
const app = express();

// Start Server
app.listen(process.env.PORT || 3000, function(){
    console.log('Server Listning on port: ' + process.env.PORT || 3000);
});