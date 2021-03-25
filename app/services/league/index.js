const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/userRoutes');
const portfolioRoute = require('./routes/portfolioRoutes');
const tradeRoute = require('./routes/tradeRoutes');
const leagueRoute = require('./routes/leagueRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, () => console.log('connected to db'));

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/user', userRoute);

app.use('/portfolio', portfolioRoute)

app.use('/trade', tradeRoute);
app.use('/league', leagueRoute);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));
