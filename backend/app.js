const express = require('express');

const app = express();



app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'fad121212', title: 'First server side post', content: 'This is coming from the circle' },
    { id: 'fad121672', title: 'Second server side post', content: 'This is coming from the circle' }
  ]
  res.status(200).json({
    message: 'Posts fetched succesfully',
    posts: posts
  });
});

module.exports = app;
