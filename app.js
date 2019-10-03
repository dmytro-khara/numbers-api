const express = require('express');
const { translateRomanToArabic } = require('./models/tanslatorModel');

const app = express();

app.post(
 '/number-api/translate', async (req, res) => {
        const number = req.number;
        const result = translateRomanToArabic(number);
        res.send(result);
    }
);
