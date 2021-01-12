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
        task.title = req.body.title;
        task.description = req.body.description;
        task.start_date = req.body.start_date;
        task.end_date = req.body.end_date;

        //Have to make this a seperate function to calculate hours_spend
        console.log(end_date);
        var seconds = Math.floor((Date - (start_date))/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        task.hours_spend = hours-(days*24);
        console.log(task.hours_spend);
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
    if(req.query.id){
        const id = req.query.id;
        Task.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message:"Task not found"})
                }else{
                    res.render('view',{task:task})
                }
            })
            .catch(err =>{
                res.status(500).send({message: "Couldn't retrieve Task"});
            })
    }
}

//Track Item page for the task id
exports.trackItem = (req, res) => {
    if(!req.body){
        return res
        .status(400).send({message:"Data is empty"})
    }
    const id = req.params.id;
    Task.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
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