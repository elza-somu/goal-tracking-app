const {Task} = require('../model/tasks');

//Index page display with all the tasks
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

//Render Add items page
exports.addItem = (req, res) => {
    res.render('add');
}

// Adding post request from Add Item page
exports.add = (req,res)=>{
    let task = new Task();
        var start_date = req.body.start_date;
        var end_date = req.body.end_date;
        task.title = req.body.title;
        task.description = req.body.description;
        task.start_date = start_date;
        task.end_date = end_date;

        //Have to make this a seperate function to calculate hours_spend
        const diffTime = Math.abs(new Date(end_date) - new Date(start_date));
        var seconds = Math.floor(diffTime/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        task.hours_spend = hours;
        //create seperate function end
        task.save(function(err){
            if(err){
                console.log(err);
                return;
            }else{
            res.redirect('/')
        }
        })
}

//To View the Single Item
exports.viewItem = (req, res) =>{
    if(req.params.id){
        const id = req.params.id;
        Task.findById(id, function(err, tasks){
            if(err){
                console.log(err);
            } else {
                res.render('view', {
                task:tasks
                });
            }
        });
    }
}

//Track Item page for the task id
exports.trackItem = (req, res) => {
    if(!req.body){
        return res
        .status(400).send({message:"Data is empty"})
    }
    const id = req.params.taskId;
    Task.findByIdAndUpdate(taskId, req.body,{useFindAndModify:false})
        .then(data =>{
            if(!data){
                res.status(404).send({message:'Task not found'});
            }else{
                res.render('track',{data});
            }
        })
        .catch(err => {
            res.status(500).send({message:"Error updating task information"});
        });
}

//Delete item based on task id
exports.deleteItem = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:'Cannot delete task'});
        }else{
            res.render('delete');
        }
    })
    .catch(err =>{
        res.status(500).send({message:'Error deleting task information'});
    })
}