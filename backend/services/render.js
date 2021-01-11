exports.homeRoute = (req,res) =>{
    let tasks =[
    {
    title: 'Learn to Code',
    id: 1,
    hashtag : 'Programming',
    date_created : '2020-Dec-06',
    date_completed : '2020-Dec-06',
    completed : true,
    time_on_task: 5
    }
    ];
    res.render('index', {
    tasks:tasks
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