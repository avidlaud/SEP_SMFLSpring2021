const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/tradeController');
const tradeValidation = require('../middleware/validate');

router.post('/submit', tradeValidation.authValidation, tradeController.trade);

module.exports = router;
