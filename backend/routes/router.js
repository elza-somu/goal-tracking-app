const express = require('express');
const route = express.Router();
const services = require('../services/render')
const {Task} = require('../model/tasks');
/* 
Root route, method: GET
*/
route.get('/', services.homeRoute); 
route.get('/add', services.addItem);
route.get('/track', services.trackItem);
route.get('/delete-item', services.deleteItem);

module.exports = route;
  