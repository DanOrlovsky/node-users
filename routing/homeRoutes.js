const homeController = require('../controllers/homeController');

module.exports = function(app, passport) {
    app.get('/', (req, res) => {
        res.render('index', { user: req.user });        
    })

}