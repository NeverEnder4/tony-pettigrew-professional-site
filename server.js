const express = require('express');
const next = require('next');
const helmet = require('helmet');
const morgan = require('morgan');
const butter = require('buttercms')('d3486499153479e9dd7ea4205b964a53ea1cb0f5');

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

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
