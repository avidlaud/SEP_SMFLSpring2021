const { response } = require('express');
const Portfolio = require("../models/portfolioModel.js");
require('dotenv').config();

const getPortfolio = async (leagueName, username) => {
    try {
        const portfolio = await Portfolio.findOne({owner:username, league: leagueName});
        if (portfolio){
            return "found";
        } else{    
            return "not found";
        }

        /*
        var portfolioInfo = {
            netWorth: portfolio.netWorth,
            cashAvailable: portfolio.cash,
            holdings: portfolio.currentHoldings
        };
        return portfolioInfo;
        */

        // graphs

    } catch (err) {
        response.status(400).send(err);
    }
};

exports.viewPortfolio = async (request, response) => {
    getPortfolio(request.params.league, request.params.username).then(response.send.bind(response));
};