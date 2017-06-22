/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use strict`;
const mogoose =require(`mongoose`);
let Schema = mogoose.Schema;

let studentSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:Schema.Types.ObjectId,
        ref:`Course`
    }
});

module.exports = mogoose.model(`Student`,studentSchema);


