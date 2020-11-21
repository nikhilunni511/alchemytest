const express = require('express');
const productRouter = express.Router();
const {findAll} = require('../controllers/product')

productRouter.get('/', findAll);

 module.exports = productRouter;