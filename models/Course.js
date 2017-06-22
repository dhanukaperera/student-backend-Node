/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
'use Strict';
let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;

let courseSchema = new Schema({
    courseName:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model(`Course`,courseSchema);