const Course = require('../models/course');
const {multipleMogooseToObject} = require('../../util/mogoose')

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', {
                courses: multipleMogooseToObject(courses)
            }))
            .catch (next);
        
        

       
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
