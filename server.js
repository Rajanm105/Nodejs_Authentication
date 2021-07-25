require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.mongoURI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true}, () => {
        console.log('Mongodb Database Connected')
    }
);

app.use('/api/demo',require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});

