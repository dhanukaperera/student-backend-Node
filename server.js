/**
 * Created by Dhanuka Perera on 6/21/2017.
 */
`use strict`;
// Node Modules
const express= require(`express`);
const bodyParsher = require(`body-parser`);
const mongoose = require(`mongoose`);

const app = express();

//Connection Settings
const dbConnection=`mongodb://localhost:27017/student`;
const port = 5001;

//Custom Modules
const student = require(`./controllers/student`);
const course =require(`./controllers/course`);
var cors = require('./services/cors');
//Middleware
app.use(bodyParsher.json());
app.use(bodyParsher.urlencoded({
    extended: true
}));
app.use(cors);


//API to handle courses
app.get(`/courses`,course.getCourses);
app.get(`/courses/:id`,course.getCourse);
app.post(`/courses`,course.addCourse);
app.put(`/courses/:id`,course.updateCourse);
app.delete(`/courses/:id`,course.removeCourse);

app.get(`/students`,student.getStudents);
app.get(`/students/:id`,student.getStudent);
app.post(`/students`,student.addStudent);
app.put(`/students/:id`,student.updateStudent);
app.delete(`/students/:id`,student.removeStudent);

//Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConnection,err=>{
    if(err) {
        throw err;
        process.exit(1);
    };
    console.log(`Connected to mongodb`);
});

//Starting the server
app.listen(port,err=>{
    if (err){
        throw err;
        return;
    }
    console.log(`app listing on ${port}`)
});





