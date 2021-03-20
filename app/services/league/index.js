const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/userRoutes');
const portfolioRoute = require('./routes/portfolioRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Successfully connected to database');
    } catch (err) {
        console.error('Failed to connect to database');
    }
};

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use('/user', userRoute);

app.use('/portfolio', portfolioRoute)

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
