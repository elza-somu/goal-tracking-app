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

// Adding post request from Add Item page
exports.add = (req,res)=>{
    let task = new Task();
    task.title = req.body.title;
    task.description = req.body.description;
    task.start_date = req.body.start_date;
    task.end_date = req.body.end_date;

    task.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
        res.redirect('/')
    }
    })
    
}
exports.trackItem = (req, res) => {
    res.render('track');
}

exports.deleteItem = (req, res) => {
    res.render('delete');
}