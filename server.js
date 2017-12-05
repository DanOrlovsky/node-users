const express = require('express');
const app = express();
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')
const exphbs = require('express-handlebars');
var db = require('./models');


app.use(express.static("public"));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session({ secret: "usersSessionSecret" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./routing/user-routes')(app, passport);

const port = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
    app.listen(port);
})