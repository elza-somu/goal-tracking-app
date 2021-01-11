exports.homeRoute = (req,res) =>{
    res.render('index');
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