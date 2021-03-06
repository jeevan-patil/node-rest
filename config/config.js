/**
 * Created by jeevan on 28/1/15.
 */

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser');

module.exports = function() {
    var app = express();
    app.use(favicon(path.join(__dirname,'../public/favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(methodOverride('_method'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public/')));
    return app;
}