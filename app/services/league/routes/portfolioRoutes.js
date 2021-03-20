const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController.js');

router.get('/:league/:username', portfolioController.viewPortfolio);

module.exports = router;