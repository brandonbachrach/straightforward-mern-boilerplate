require('dotenv').config()
const cors = require('cors');
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// CORS Middleware
app.use(cors());
// express middleware handling the body parsing 
app.use(express.json());
// express middleware handling the form parsing
app.use(express.urlencoded({extended: false}));
// middleware for handling sample api routes
app.use('/api/v1', require('./api/routes/crud'));

// create static assets from react code for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

// use port from environment variables for production
const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
