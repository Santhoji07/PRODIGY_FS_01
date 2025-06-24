const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter'); // Ensure this is the correct path to your AuthRouter.js file

require('dotenv').config();
require('./Models/db'); // Ensure this is the correct path to your db.js file
const PORT =process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/products',AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });