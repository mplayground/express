'use strict';

const PORT = 3000;

import {join} from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import ReactEngine from 'react-engine';
import bodyParser from 'body-parser';
import validationHandler from './validation/ValidationHandler'
import cookieParser from 'cookie-parser'

// Test
import movies from './movies.json';
import routes from './public/routes.jsx';

// RestAPI Routers
let app = express();

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: join(__dirname, '/public/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});

// set json parser for Restful API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// set Restful API Controllers
import teacherRoute from './routes/teacherRoute'
import studentRoute from './routes/studentRoute'
app.use('/teachers',teacherRoute)
app.use('/students',studentRoute)

app.engine('.jsx', engine);
app.set('views', join(__dirname, '/public/views'));
app.set('view engine', 'jsx');
app.set('view', ReactEngine.expressView);

app.use(express.static(join(__dirname, '/public')));
app.use(favicon(join(__dirname, '/public/favicon.ico')));

app.get('*', function(req, res) {
  console.log("req.url : " + req.url);
  res.render(req.url, {
    movies: movies
  });
});

app.use(validationHandler.errHandler)

// React for middleware
app.use(function(err, req, res, next) {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).render(req.url);
  }
  else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).render('500.jsx', {
      err: {
        message: err.message,
        stack: err.stack
      }
    });
  }
});

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
