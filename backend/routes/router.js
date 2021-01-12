const express = require('express');
const route = express.Router();
const services = require('../services/render')
const {Task} = require('../model/tasks');
/* 
Root route, method: GET
*/
route.get('/', services.homeRoute); 
route.get('/add', services.addItem);
route.post('/add', services.add);
route.post('/view/:title',services.viewItem);
route.get('/track/:title', services.trackItem);
route.get('/delete/:title', services.deleteItem);


module.exports = route;
  