/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use Strict`
const Student = require(`../models/Student`);
const Course = require(`../models/Course`);

module.exports={
    getStudents:(req,res)=>{
        Student.find().populate('course').exec().then(students=>{
            res.json(students);
        }).catch(err=>{
            throw err;
        })
    },
    getStudent:(req,res)=>{
        Student.findById(req.params.id).populate(`course`).exec().then(student=>{
            res.send(student);
        }).catch(err=>{
            throw err;
        })
    },
    addStudent:(req,res)=>{
        const newStudent = new Student(req.body);
        newStudent.save().then(newStudent=>{
            res.json(newStudent);
        }).catch(err=>{
            throw err;
        })
    },
    updateStudent:(req,res)=>{
        const student = req.body;
        delete student._id;
        const studentId= req.params.id;
        Student.findByIdAndUpdate(studentId,{$set:student}).then(updatedStudent=>{
            res.json(student);
        }).catch(err=>{
            throw err;
        })
    },
    removeStudent:(req,res)=>{
        Student.findByIdAndRemove(req.params.id).then(student=>{
            res.sendStatus(200);
            console.log(student);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    }
};