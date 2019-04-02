// require express
const express = require('express');
// create app with express
const  app = express();
// create port const
const port = 3000;

// require routers from ./routes/movie
const movieRouter = require('./routes/movies');

// connect to the router
app.use('/movie', movieRouter);

// express to listen on port 3000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})