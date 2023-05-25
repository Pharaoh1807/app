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
        
        // [GET] /courses/:id/edit
     edit(req, res, next) {

        courses.findOne({
            _id: req.params.id
        })

        .then(course => res.render('courses/edit', {course: mongooseToObject(course)}) )
        .catch (next)     
          
        
    }
    // [PUT] /courses/:id
    update (req, res, next) {
        courses.updateOne(
            { _id: req.params.id},
            req.body
        )
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)       
    }

    // [DELETE] /courses/:id
    destroy (req, res, next) {
        courses.delete({_id: req.params.id})
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next) 
    }


}

module.exports = new CourseController();
