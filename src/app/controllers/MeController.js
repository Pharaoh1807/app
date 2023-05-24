const course = require('../models/course')
const {multipleMogooseToObject, mongooseToObject} = require('../../util/mogoose')


class meController {
    

    // [GET] /me/stored/courses
    storedCourses (req, res, next) {
        course.find({})
                .then(courses =>  res.render('me/stored-courses', {courses: multipleMogooseToObject(courses)}) )
                .catch(next)       
       }


}

module.exports = new meController();
