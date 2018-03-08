const express = require('express');
const config = require('./server/config/config');
const database = require('./server/config/database.config');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');

const app = express();

const port = process.env.PORT || 4000;
const environment = process.env.NODE_ENV || 'development';

database(config[environment]);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(cors());

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// routes
require('./server/routes')(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});