var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://white:bettercalljoy00@cluster0-v3tgs.mongodb.net/codac_pff', {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true}, () =>{
        console.log("successfully connected to database")
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(5000, () =>{
    console.log('express server started')
});
