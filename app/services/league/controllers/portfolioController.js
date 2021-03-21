const { response } = require('express');
const { Order, Portfolio } = require('../models/portfolioModel');
require('dotenv').config();

const getPortfolio = async (league, username) => {
    try {
        /* 
        Create portfolio and add to DB

        const newPortfolio = new Portfolio({
            owner: "christine",
            league: "diamondhands",
            cash: 999,
            netWorth: 999999,
            currentHoldings: [{ticker:"TSLA", quantity:2}, {ticker:"AAPL", quantity:10}]
        });
        try {
            const saved = await newPortfolio.save();
            return saved;
        } catch (err) {
            return err;
        }
        */
        
        const portfolio = await Portfolio.findOne({owner:username, league:league}); //, league: leagueName
        if (portfolio){
            var portfolioInfo = {
                netWorth: portfolio.netWorth,
                cashAvailable: portfolio.cash,
                holdings: portfolio.currentHoldings
            };
            return portfolioInfo;
        } 
        else
            return "Portfolio does not exist!";
        
        // graphs

        
    } catch (err) {
        return err;
    }
};

exports.viewPortfolio = async (request, response) => {
    getPortfolio(request.params.league, request.params.username).then(response.send.bind(response));
};