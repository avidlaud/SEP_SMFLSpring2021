/** @module routes/tradeRoutes */
/*
    Written By: Group 3
    Tested By: Group 3
    Debugged By: Group 3
*/

const express = require('express');

const router = express.Router();

const tradeController = require('../controllers/tradeController');
const tradeValidation = require('../middleware/validate');

/**
 * Route handling order placement
 * @function
 * @name post/submit
 */
router.post('/submit', tradeValidation.authValidation, tradeValidation.findValidLeague, tradeValidation.validTicker, tradeController.trade);

module.exports = router;
