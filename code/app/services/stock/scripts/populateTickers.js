/**
 * Populates database of valid tickers
 * @module scripts/populateTickers
 */
/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

const mongoose = require('mongoose');
const fetch = require('node-fetch');
const path = require('path');

const { Ticker } = require('../models/equityModel');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('Successfully connected to database');
    } catch (err) {
        console.error('Failed to connect to database');
    }
};

const gatherTickers = async () => {
    const response = await fetch(`https://cloud.iexapis.com/stable/ref-data/iex/symbols?token=${process.env.API_KEY}`);
    const tickerList = await response.json();
    await tickerList.forEach((element) => {
        const insertTicker = new Ticker({ ticker: element.symbol });
        insertTicker.save();
    });
};

connectDB().then(gatherTickers());
