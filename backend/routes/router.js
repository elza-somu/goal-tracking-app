const express = require('express');
const route = express.Router();
const services = require('../services/render')
/* 
Root route, method: GET
*/
route.get('/', services.homeRoute); 
route.get('/add-item', services.addItem);
route.get('/edit-item', services.editItem);
route.get('/delete-item', services.deleteItem);

module.exports = route;
  