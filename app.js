const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Morgan allow us watch the request in the console.
app.use(morgan('dev'));

// Routes which should handle request
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
