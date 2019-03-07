const express = require('express');
const next = require('next');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const butter = require('buttercms')(process.env.BUTTER_API_KEY);
const fetch = require('isomorphic-unfetch');

const thoughts = require('./controllers/thoughts');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(helmet());
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/posts/all', (req, res) => {
    thoughts.getAllPosts(res, butter);
  });

  app.get('/post/:slug', (req, res) => {
    thoughts.getSinglePost(req, res, fetch);
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
