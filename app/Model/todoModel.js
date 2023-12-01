const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Schema defines structure of document that will be stored in mongodb collection.
const taskSchema = new Schema(
    {
        description: String,
        category: String,
        dueDate: Date,
    });


module.exports = mongoose.model('Todo', taskSchema);