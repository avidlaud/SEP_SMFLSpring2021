const { Order, Portfolio } = require('../models/portfolioModel');

require('dotenv').config();

const getPortfolio = async (league, username) => {
    try {        
            const portfolio = await Portfolio.findOne({owner:username, league:league}); 
            if (portfolio){
                var portfolioInfo = {
                    currentNetWorth: portfolio.currentNetWorth,
                    cashAvailable: portfolio.cash,
                    holdings: portfolio.currentHoldings,
                    netWorth: portfolio.netWorth,
                };
                return portfolioInfo;
            } 
            else
                return "Portfolio does not exist!";
          
    } catch (err) {
        console.log(err);
        return err;
    }

};

exports.viewPortfolio = async (request, response) => {
    const portfolio = await getPortfolio(request.params.league, request.params.username)
    .catch((err) => {
        console.log(err);
        response.status(400).send(err);
    });
    response.send(portfolio);
};