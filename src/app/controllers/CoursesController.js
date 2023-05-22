const courses = require('../models/course')
const {multipleMogooseToObject, mongooseToObject} = require('../../util/mogoose')


class CourseController {
    
    // [GET] /courses/:slug
    show(req, res, next) {

        courses.findOne({
            slug: req.params.slug
        })
        .then (course => res.render('courses/show', { course: mongooseToObject(course) }))
        .catch (next)    
       
    }

     // [GET] /courses/create
     create(req, res, next) {
        res.render('courses/create');
       
    }

     // [POST] /courses/store
     store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`
        courses.create({
           name: formData.name,
           description: formData.description,
           videoid: formData.videoid,
           image: formData.image,
           level: formData.level           
        })

        .then(() => res.redirect('/'))
        .catch(err => {
            
        })

      
        
        
        
        
    }


}

module.exports = new CourseController();
