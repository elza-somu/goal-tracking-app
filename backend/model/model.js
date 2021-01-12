const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date
    },
    time_spent:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const itemdb = mongoose.model('itemdb',schema);

module.exports = itemdb;