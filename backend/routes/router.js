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
route.get('/view/:id',services.viewItem);
route.get('/track/:id', services.track);
route.post('/update/:id', services.trackItem);
route.get('/delete/:id', services.deleteItem);


module.exports = route;
  