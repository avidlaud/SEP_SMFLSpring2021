const express = require('express');

const router = express.Router();

const portfolioController = require('../controllers/portfolioController.js');

router.get('/:league/:username', portfolioController.viewPortfolio);

router.get('*', (request, response) => {
    response.send('This endpoint does not exist!');
});

module.exports = router;