const mongoose = require('mongoose');

const {Schema} = mongoose;

const noteSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    user_id:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    }
},{
    timestamps:true
});

const Notes = mongoose.model('notes', noteSchema);

module.exports = Notes;