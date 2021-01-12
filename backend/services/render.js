const {Task} = require('../model/tasks');

exports.homeRoute = (req,res) =>{
    Task.find({}, function(err, tasks){
        if(err){
            console.log(err);
        } else {
            res.render('index', {
            tasks:tasks
            
            });
        }
    });
}

exports.addItem = (req, res) => {
    res.render('add');
}

exports.editItem = (req, res) => {
    res.render('edit');
}

exports.deleteItem = (req, res) => {
    res.render('delete');
}