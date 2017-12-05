module.exports = function(app, passport) {
    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/login', (req, res) => {
        res.render('accounts/login', { message: req.flash('loginMessage') });
    });

    app.get('/signup', (req, res) => {
        res.render('accounts/signup', {message: req.flash('signupMessage') });
    })

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated())
            return next();

        res.redirect('/');
    }
}