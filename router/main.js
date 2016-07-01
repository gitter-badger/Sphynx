module.exports = function(app) {
    app.get('/', home);
};

function home(req, res) {
    res.end('<h1>Works</h1>');
}