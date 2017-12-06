var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('accounts/signup');
}

exports.login = function(req, res) {
    res.render('accounts/login');
}

exports.dashboard = function(req, res) {
    res.render('accounts/dashboard', req.user);
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
}