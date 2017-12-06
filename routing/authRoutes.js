const authController = require('../controllers/authController');

module.exports = function(app, passport) {
    ////// ROUTES
    app.get('/signup', authController.signup);
    app.get('/login', authController.login);
    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/logout', authController.logout);
    app.post('/signup', (req, res, next) => { 
        var user = req.body;
        if(user.email === '' || user.password==='' || user.firstname==='' || user.lastname==='') 
            return res.render('accounts/signup', { message: "Please fill out the form completely" });
        passport.authenticate('local-signup', (err, user, info) => {
            if(err) return next(err)
            if(!user) {
                return res.render('accounts/signup', { message: info.message });
            }
            req.logIn(user, function(err) {
                if(err) return next(err);
                return res.redirect('/dashboard');
            })
        })(req, res, next);
    });

    app.post('/login', function(req, res, next) {
       passport.authenticate('local-login', function(err, user, info) {
           if(err) return next(err);
           if(!user) {
               return res.render('accounts/login', { message: info.message });
           }
           req.logIn(user, function(err) { 
               if(err) return next(err);
               return res.redirect('/dashboard');
           })
       })(req, res, next); 
    });

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

}