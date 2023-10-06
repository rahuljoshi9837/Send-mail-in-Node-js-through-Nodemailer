const express = require('express');
const mailController=require('./controller/mailController');
const dotenv = require('dotenv').config();
const app = express();

const PORT = process.env.PORT;

app.post("/mail", mailController);

app.listen(PORT, () => {
    console.log(`Server is listen on ${PORT} `);
});