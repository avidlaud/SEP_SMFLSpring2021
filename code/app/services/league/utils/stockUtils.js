/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

const fetch = require('node-fetch');

exports.getMarketPrice = async (ticker) => {
    try {
        const currPrice = await fetch(`${process.env.STOCK_URL}/equity/current/${ticker}`)
            .then((response) => response.json());
        return currPrice;
    } catch (err) {
        console.error(err);
    }
};

exports.getStatistics = async (ticker) => {
    try {
        const statistics = await fetch(`${process.env.STOCK_URL}/equity/statistics/${ticker}`)
            .then((response) => response.json());
        return statistics;
    } catch (err) {
        console.error(err);
    }
};

exports.getHistorical = async (ticker, tf) => {
    try {
        const statistics = await fetch(`${process.env.STOCK_URL}/equity/historical/${ticker}?timeframe=6m`)
            .then((response) => response.json());
        return statistics;
    } catch (err) {
        console.error(err);
    }
};
