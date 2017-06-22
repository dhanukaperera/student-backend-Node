/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use strict`
const Course = require(`../models/Course`);

module.exports={
   getCourses:(req,res)=>{
       Course.find().exec().then(courses=>{
           res.json(courses);
           //console.log(courses);
       }).catch(err=>{
           throw err;
           res.sendStatus(500);
       });
   },
    getCourse:(req,res)=>{
        Course.findById(req.params.id).populate(`course`).exec().then(course=>{
            res.send(course);
        }).catch(err=>{
            throw err;
        })
    },
    addCourse:(req,res)=>{
       const newCourse = new Course(req.body);
        newCourse.save().then(newCourse=>{
            console.log(newCourse);
            res.sendStatus(200);
        }).catch(err=>{
            throw err;
            res.sendStatus(500);
        })
    },
    updateCourse:(req,res)=>{
       const course = req.body;
       delete course._id;
       const courseId= req.params.id;
       Course.findByIdAndUpdate(courseId,{$set:course}).then(updateStudent=>{
           //res.json(course);
           res.sendStatus(200);
           console.log(course);
       }).catch(err=>{
           throw err;
           res.sendStatus(500);
       })
    },
    removeCourse:(req,res)=>{
       Course.findByIdAndRemove(req.params.id).then(course=>{
           res.sendStatus(200);
           console.log(course);
       }).catch(err=>{
           console.error(err);
           res.sendStatus(500);
       })
    }
};