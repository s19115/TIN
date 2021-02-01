var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });

const indexRouter = require('./routes/index');

const bossApiRouter = require('./routes/api/bossApiRoute');
const bossRouter = require('./routes/bossRoute');

const weaponApiRouter = require('./routes/api/weaponApiRoute');
const weaponRouter = require('./routes/weaponRoute');


const dropApiRouter = require('./routes/api/dropApiRoute');
const dropRouter = require('./routes/dropRoute');

const userRouter=require('./routes/userRoute');



const session = require('express-session');



var app = express();


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'super-secret-password',
    resave: false
}));

app.use((req, res, next) => {
    res.locals.loggedUser = req.session.loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

app.use('/', indexRouter);
app.use('/boss', bossRouter);
app.use('/api/boss', bossApiRouter);
app.use('/weapon', weaponRouter);
app.use('/api/weapon', weaponApiRouter);
app.use('/drop', dropRouter);
app.use('/api/drop', dropApiRouter);
app.use('/user',userRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
