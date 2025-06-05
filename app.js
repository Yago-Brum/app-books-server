const express = require('express');
const app = express();
const port = 8000;
const routeBook = require('./routes/book');

app.use(express.json());

app.use('/books', routeBook);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });

    module.exports = app;   