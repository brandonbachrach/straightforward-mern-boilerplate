const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

/**
 * @method GET
 * @access public
 * @endpoint /api/v1/get
 **/
router.get('/get', (req, res) => {
    res.json({
        message: 'GET Route',
        Endpoints: 'Other Available Endpoints',
        create: '/api/v1/post',
        read: '/api/v1/get',
        update: '/api/v1/patch/:id',
        delete: '/api/v1/delete/:id'
    });
});

/**
 * @method POST
 * @access public
 * @endpoint /api/v1/post
 **/
router.post('/post', (req, res) => {
    res.json({
        message: 'POST Route',
    });
});

/**
 * @method PATCH
 * @access public
 * @endpoint /api/v1/patch/:id
 **/
router.patch('/patch/:id', (req, res) => {
    res.json({
        message: `PATCH Route: Updating ${req.params.id}`,
    });
});

/**
 * @method DELETE
 * @access public
 * @endpoint /api/v1/delete/:id
 **/
router.delete('/delete/:id', (req, res) => {
    res.json({
        message: `DELETE Route: Deleting ${req.params.id}`,
    });
});

module.exports = router;
