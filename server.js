const express = require('express');
const next = require('next');
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const butter = require('buttercms')(process.env.BUTTER_API_KEY);
const fetch = require('isomorphic-unfetch');

const thoughts = require('./controllers/thoughts');
const works = require('./controllers/works');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(morgan('dev'));
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  // blog routes
  server.get('/posts/all', (req, res) => {
    thoughts.getAllPosts(res, butter);
  });

  server.get('/thoughts/:slug', (req, res) => {
    return app.render(req, res, '/thought', {
      slug: req.params.slug,
    });
  });

  server.get('/post/:slug', (req, res) => {
    thoughts.getSinglePost(req, res, fetch);
  });

  // portfolio routes
  server.get('/portfolio/all', (req, res) => {
    works.getAllPortfolioItems(res, butter);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
