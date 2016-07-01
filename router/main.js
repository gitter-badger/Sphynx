module.exports = function(app) {
    app.get('/', home);
};

function home(req, res) {
    res.render('home');
}